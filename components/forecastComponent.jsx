import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {icons, images} from "@/constants";

const ForecastComponent = () => {
  return (
      <View className="flex justify-around flex-1  flex-col
                    {/*border-2 border-red-500*/}
                    ">
          {/*location*/}
          <View className="
                             {/*border-2 border-red-500*/}
                            ">
              <Text className="text-white text-center text-2xl font-bold">
                  London, {" "}
                  <Text className="text-lg font-semibold text-gray-300">
                      United Kingdom
                  </Text>
              </Text>
          </View>

          {/*    weather image    */}
          <View className="flex-row justify-center
                            {/*border-2 border-red-500*/}
                        ">
              <Image
                  source={images.partlyCloudy}
                  className="w-52 h-52"
              />
          </View>

          {/*    degree celsius*/}
          <View className="space-y-2
                        {/*border-2 border-red-500*/}
                        ">
              <Text className="text-center font-bold text-white text-6xl ml-5">
                  23 &#176;
              </Text>
              <Text className="text-center  text-white text-xl tracking-wide">
                  Partly cloudy
              </Text>
          </View>

          {/*    other status     */}
          <View className="flex-row  justify-between
                        {/*border-2 border-red-500*/}
                        ">
              {/* temperature */}
              <View className="flex-row space-x-2 items-center">
                  <Image
                      source={icons.wind}
                      className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                      22km
                  </Text>
              </View>

              {/*    humidity     */}
              <View className="flex-row space-x-2 items-center">
                  <Image
                      source={icons.drop}
                      className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                      22%
                  </Text>
              </View>

              {/*    sunrise      */}
              <View className="flex-row space-x-2 items-center">
                  <Image
                      source={icons.sun}
                      className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                      06:05
                  </Text>
              </View>

          </View>

      </View>
  );
};

const styles = StyleSheet.create({})

export default ForecastComponent;
