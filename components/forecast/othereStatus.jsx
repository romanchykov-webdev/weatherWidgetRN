import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from "@/constants";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";

const OtherStatus = ({km,mh,humidity,suneRise}) => {

    // console.log("suneRise", suneRise);

    // Управление положением компонента с Km
    const [isKmOrMH, setIsKmOrMH] = useState(false)
    const translateY_Km = useSharedValue(0);
    // Управление положением компонента с Mh
    const translateY_Mh = useSharedValue(0);

    useEffect(()=>{
        // Если isKmOrMp = true, km поднимается, Mh опускается, и наоборот
        translateY_Km.value = withSpring(isKmOrMH ? -50 : 15, {damping: 10, stiffness: 100});
        translateY_Mh.value = withSpring(isKmOrMH ? -15 : 50, {damping: 10, stiffness: 100});
    },[isKmOrMH])


    // Анимационный стиль для animatedStyleKm
    const animatedStyleKm = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY_Km.value}],
            opacity: withSpring(isKmOrMH ? 0 : 1), // Анимация исчезновения
        };
    });

    // Анимационный стиль для animatedStyleMh
    const animatedStyleMh = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY_Mh.value}],
            opacity: withSpring(isKmOrMH ? 1 : 0), // Анимация появления
        };
    });


// Switcher
//     console.log('isEnabled', isEnabled)
//     console.log('isKmOrMH', isKmOrMH)

    const toggleKmMh=()=>{
        setIsKmOrMH(!isKmOrMH)
        // console.log('isKmOrMH', isKmOrMH)
    }



  return (
      <View className="flex-row  justify-between
                        {/*border-2 border-red-500*/}
                        ">
          {/* temperature */}
          <View className="flex-row space-x-2 items-center">
              <Image
                  source={icons.wind}
                  className="w-6 h-6"
              />
              <TouchableOpacity
                  onPress={toggleKmMh}
                  className=" overflow-hidden
                        {/*border-2 border-red-500*/}
                        "
              >
                  <Animated.View style={animatedStyleKm}>
                      <Text className="text-white font-semibold text-base">
                          {km}km
                      </Text>
                  </Animated.View>
                  <Animated.View style={animatedStyleMh}>
                      <Text className="text-white font-semibold text-base">
                          {mh}mh
                      </Text>
                  </Animated.View>

              </TouchableOpacity>
              <Text className="absolute bottom-2 right-5 text-[8px]">
                  Km - Mh
              </Text>
          </View>

          {/*    humidity     */}
          <View className="flex-row space-x-2 items-center">
              <Image
                  source={icons.drop}
                  className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                  {humidity}%
              </Text>
          </View>

          {/*    sunrise      */}
          <View className="flex-row space-x-2 items-center">
              <Image
                  source={icons.sun}
                  className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                  {suneRise?.split(" ")[0]}
              </Text>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({})

export default OtherStatus;
