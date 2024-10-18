import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {CalendarDaysIcon} from "react-native-heroicons/outline";
import {theme} from "@/theme";
import {images} from "@/constants";

const ForecastNextDay = () => {
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
              contentContainerStyle={{paddingHorizontal: 15,gap:15}}
          >
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>

              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>
              <View className="flex justify-center w-24 items-center rounded-3xl py-3 space-y-3"
                    style={{backgroundColor: theme.bgWhite(0.5)}}
              >

                  <Image
                      source={images.heavyRain}
                      className="h-11 w-11"
                  />
                  <Text className="text-white">Monday</Text>

                  <Text className="text-white text-xl font-semibold">13&#176;</Text>
              </View>


          </ScrollView>

      </View>
  );
};

const styles = StyleSheet.create({})

export default ForecastNextDay;
