import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {CalendarDaysIcon} from "react-native-heroicons/outline";
import {theme} from "@/theme";
import {images, witherImages} from "@/constants";

const ForecastNextDay = ({weather, isEnabled}) => {
    const {forecast} = weather

const forecastday=forecast?.forecastday.slice(1);

    // console.log('forecast',forecast?.forecastday)
    // console.log('weather',weather?.location?.name)
    // console.log('forecastday',forecastday)


    return (
        <View className="mb-2 space-y-3
                    {/*border-2 border-red-500*/}
                    ">
            <View className="flex-row items-center space-x-2 mx-5">
                <CalendarDaysIcon size="22" color="white"/>
                <Text className="text-white text-base">
                    Daily forecast
                </Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15, gap: 15}}
            >
                {
                    forecastday?.map((item, index) => {
                        let data=new Date(item.date);
                        let options={weekday:'long'};
                        let dataName=data.toLocaleDateString('en-US',options);
                        dataName=dataName.split(',')[0]

                        // console.log('item?.day?.condition?.text',item?.day?.condition?.text)


                        return (
                            <View key={index}
                                  className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                                  style={{backgroundColor: theme.bgWhite(0.5)}}
                            >

                                <Image
                                    // source={images.heavyRain}
                                    source={witherImages[item?.day?.condition?.text]}
                                    className="h-11 w-11"
                                />
                                <Text className="text-md text-neutral-700">
                                    {item?.date.split("-").pop()}
                                </Text>
                                <Text className="text-white"
                                      numberOfLines={1}
                                >
                                    {dataName}

                                </Text>

                                {
                                    !isEnabled
                                        ? (
                                            <Text
                                                className="text-white text-xl font-semibold">{item?.day?.avgtemp_c}&#176;</Text>
                                        )
                                        : (
                                            <Text
                                                className="text-white text-xl font-semibold">{item?.day?.avgtemp_f}&#8457;</Text>
                                        )
                                }


                            </View>
                        )
                    })
                }


            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({})

export default ForecastNextDay;
