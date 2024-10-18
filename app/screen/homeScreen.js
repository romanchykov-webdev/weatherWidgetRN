import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Image, Text, Dimensions, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {icons, images} from '@/constants';
import {hp, wp} from "@/helpers/common";
import {SearchBar} from "react-native-screens";
import SearchComponent from "@/components/searchComponent";
import {MapPinIcon} from "react-native-heroicons/solid";
import ShowLocation from "@/components/showLocation";
import {CalendarDaysIcon} from "react-native-heroicons/outline";
import {theme} from "@/theme";
import ForecastComponent from "@/components/forecastComponent";
import ForecastNextDay from "@/components/forecastNextDay";

const HomeScreen = () => {

    const [textSearchInput, setTextSearchInput] = useState('');
    const [location, setShowLocation] = useState([1, 2, 3])

    const onChangeSearch = (text) => {
        setTextSearchInput(text)
    }
    console.log('textSearchInput', textSearchInput)

    const handleClick = (loc) => {
        console.log('loc', loc)
    }

    const [showSearch, setToggleShowSearch] = useState(false);
    const handleSearchShow = () => {
        setToggleShowSearch(!showSearch);
        setTextSearchInput('')
    }


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
                        onChangeSearch={onChangeSearch}
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
                                // showSearch={showSearch}
                                // setToggleShowSearch={setToggleShowSearch}
                            />
                        )
                    }


                    {/*    forecast section     */}
                    <ForecastComponent/>


                </SafeAreaView>

                {/*    forecast for next day    */}
                <ForecastNextDay/>

            </ScrollView>
        </>

    );
};


export default HomeScreen;
