import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';

const MainTemperature = ({
         temp_c,
         temp_f,
         isEnabled,
         setIsEnabled,
         toggleSwitch,
         translateY_C,
         translateY_F
}) => {

// Switcher


    // Эффект для обновления анимации при изменении isEnabled
    // Анимационный стиль для Цельсия
    const animatedStyleC = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY_C.value}],
            opacity: withSpring(isEnabled ? 0 : 1), // Анимация исчезновения
        };
    });

    // Анимационный стиль для Фаренгейта
    const animatedStyleF = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY_F.value}],
            opacity: withSpring(isEnabled ? 1 : 0), // Анимация появления
        };
    });

    useEffect(() => {
        // Если isEnabled = true, Цельсий поднимается, Фаренгейт опускается, и наоборот
        translateY_C.value = withSpring(isEnabled ? -50 : 80, {damping: 10, stiffness: 100});
        translateY_F.value = withSpring(isEnabled ? 0 : 50, {damping: 10, stiffness: 100});



    }, [isEnabled]);
// Switcher

  return (
      <View className=" relstive h-[150] flex-col justify-end overflow-hidden w-full items-center
                {/*border-2 border-red-500*/}
                ">
          <View
              className="absolute top-[-50]"
          >
              {/* Компонент для отображения Цельсия */}
              <Animated.View style={animatedStyleC}>
                  <Text className="text-center font-bold text-white text-6xl ml-5">
                      {temp_c} &#176;C
                  </Text>
              </Animated.View>

              {/* Компонент для отображения Фаренгейта */}
              <Animated.View style={animatedStyleF}>
                  <Text className="text-center font-bold text-white text-6xl ml-5">
                      {temp_f} &#8457;
                  </Text>
              </Animated.View>
          </View>
          <View className="flex-row justify-center items-center">
              <Text className="text-white font-semibold text-3xl">&#176;C</Text>
              <Switch
                  trackColor={{false: '#767577', true: '#767577'}}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  className="mx-5"
              />
              <Text className="text-white font-semibold text-3xl">&#8457;</Text>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({})

export default MainTemperature;
