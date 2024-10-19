import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {icons, images, witherImages} from "@/constants";
import MainTemperature from "@/components/forecast/mainTemperature";
import OthereStatus from "@/components/forecast/othereStatus";


const ForecastComponent = ({
   weather,
   isEnabled,
   setIsEnabled,
   toggleSwitch,
   translateY_C,
   translateY_F,
}) => {






    const {current, location} = weather;
    // console.log('current', );
    // console.log('forcast',forecast)
    return (
        <View className="flex justify-around flex-1  flex-col
                    {/*border-2 border-red-500*/}
                    ">
            {/*location*/}
            <View className="
                             {/*border-2 border-red-500*/}
                            ">
                <Text className="text-white text-center text-2xl font-bold">
                    {location?.name}

                </Text>
                <Text className="text-lg font-semibold text-gray-300 text-center">
                    Country: {location?.country} {" "}
                    <Text className="text-lg text-center font-semibold text-gray-300">
                        Region: {location?.region}
                    </Text>
                </Text>

            </View>

            {/*    weather image    */}
            <View className="flex-row justify-center
                            {/*border-2 border-red-500*/}
                        ">
                <Image
                    // source={images.partlyCloudy}
                    source={witherImages[current?.condition?.text]}
                    className="w-52 h-52"
                />
            </View>

            {/*    degree celsius*/}
            <View className="space-y-2  items-center
                        {/*border-2 border-red-500*/}
                        ">
             {/*   temperature Main*/}
             <MainTemperature
                 temp_c={current?.temp_c}
                 temp_f={current?.temp_f}
                 isEnabled={isEnabled}
                 setIsEnabled={setIsEnabled}
                 toggleSwitch={toggleSwitch}
                 translateY_C={translateY_C}
                 translateY_F={translateY_F}
             />

                <Text className="text-center  text-white text-xl tracking-wide">
                    {current?.condition?.text}
                </Text>
            </View>

            {/*    other status     */}
            <OthereStatus
                km={current?.wind_kph}
                mh={current?.wind_mph}
                humidity={current?.humidity}
                suneRise={weather?.forecast?.forecastday[0]?.astro?.sunrise}

            />


        </View>
    );
};

const styles = StyleSheet.create({})

export default ForecastComponent;
