import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Image, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {images} from '@/constants';
import {hp, wp} from "@/helpers/common";
import SearchComponent from "@/components/searchComponent";
import ShowLocation from "@/components/showLocation";
import ForecastComponent from "@/components/forecast/forecastComponent";
import ForecastNextDay from "@/components/forecastNextDay";
import {debounce} from 'lodash';
import {fetchLocation, fetchWeatherForecast} from "@/api/weather";
import {useEvent, useSharedValue} from "react-native-reanimated";

import * as Progress from 'react-native-progress';
import {getData} from "@/Utils/asyncStorage";

// get city name
import {getCityByLocation} from '@/Utils/getLocation'

const HomeScreen = () => {

    const [city, setCity] = useState(null);
    const handleGetCity = async () => {
        try {
            const cityName = await getCityByLocation();
            setCity(cityName);
            fetchMyWeatherData(cityName)
            // console.log('cityName',cityName)
        } catch (error) {
            console.log('error',error)
        }
    };
    useEffect(() => {
        setLoading(true)
        handleGetCity()



        if(city===null){
            setLoading(true)
        }else{
            setTimeout(() => {
                setLoading(false)

            }, 1000)
        }


    },[city])



    const [textSearchInput, setTextSearchInput] = useState('');
    const [location, setShowLocation] = useState({})
    const [weather, setWeather] = useState({})

    const [loading, setLoading] = useState(true)


    const onChangeSearch = value => {
        setTextSearchInput(value)
        // console.log('textSearchInput', value)
        // fetch location
        if (value.length > 2) {

            fetchLocation({cityName: value}).then(data => {
                // console.log('got location', data)
                setShowLocation(data)
            });

        }

    }

    // useEffect(() => {
    //     setLoading(true)
    //
    //     fetchMyWeatherData()
    //
    //     setTimeout(() => {
    //         setLoading(false)
    //
    //     }, 1000)
    //
    // }, []);


    const fetchMyWeatherData = async (cityName) => {

        let myCity = await getData('city')
        let cityName_ = 'London'
        if (myCity) cityName = myCity


        fetchWeatherForecast({
            cityName: cityName,
            days: '8',
        }).then(data => {
            setWeather(data)
            // console.log('got data', data)
        })


    }


    const handleTextDebounce = useCallback(debounce(onChangeSearch, 1200), [])
    const handleClick = (loc) => {
        // console.log('loc', loc)
        setLoading(true)
        setToggleShowSearch(!showSearch);
        setTextSearchInput('')
        // setShowLocation([])
        fetchWeatherForecast({
            cityName: loc.name,
            days: '8',
        }).then(data => {
            setWeather(data)
            // console.log('got data',JSON.stringify(data,null,2))
        })

        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }

    const [showSearch, setToggleShowSearch] = useState(false);
    const handleSearchShow = () => {
        setToggleShowSearch(!showSearch);
        setTextSearchInput('')
    }


    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    // Управление положением компонента с Цельсиями
    const translateY_C = useSharedValue(0);
    // Управление положением компонента с Фаренгейтами
    const translateY_F = useSharedValue(0);
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    return (
        <>
            <View className="bg-red-500 flex-1 w-full h-full absolute"
                  style={{height: hp(100), width: wp(100)}}
            >

                <Image
                    blurRadius={70}
                    source={images.bg}
                    className="w-full h-full"

                />


            </View>
            {/*  --------------------  */}

            {
                loading
                    ? (
                        <View className=" flex-1 justify-center items-center
                    {/*border-2 border-red-500*/}
                    ">
                            <Progress.Circle size={230} indeterminate={true}/>
                        </View>
                    )
                    : (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardDismissMode="on-drag"  // Добавляем это свойство для скрытия клавиатуры
                        >
                            <SafeAreaView className="flex flex-1 m-5 justify-between
                                {/*border-2 border-red-500*/}
                                  "
                                          style={{height: hp(100)}}
                            >
                                <StatusBar style='dark'/>
                                {/*    search section   */}



                                <SearchComponent
                                    location={location}
                                    setTextSearchInput={setTextSearchInput}
                                    onChangeSearch={handleTextDebounce}
                                    handleSearchShow={handleSearchShow}
                                    showSearch={showSearch}
                                    setToggleShowSearch={setToggleShowSearch}
                                />
                                {/*  show location  */}
                                {
                                    textSearchInput && (
                                        <ShowLocation
                                            location={location}
                                            textSearchInput={textSearchInput}
                                            setShowLocation={setShowLocation}
                                            handleClick={handleClick}
                                            // showSearch={showSearch}
                                            // setToggleShowSearch={setToggleShowSearch}
                                        />
                                    )
                                }


                                {/*    forecast section     */}
                                <ForecastComponent
                                    weather={weather}
                                    isEnabled={isEnabled}
                                    setIsEnabled={setIsEnabled}
                                    toggleSwitch={toggleSwitch}
                                    translateY_C={translateY_C}
                                    translateY_F={translateY_F}
                                />


                            </SafeAreaView>

                            {/*    forecast for next day    */}

                            <ForecastNextDay weather={weather} isEnabled={isEnabled}/>

                        </ScrollView>
                    )
            }

        </>

    );
};


export default HomeScreen;
