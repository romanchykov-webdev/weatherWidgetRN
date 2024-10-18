import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {hp, wp} from "@/helpers/common";
import {theme} from "@/theme";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const SearchComponent = ({textSearchInput,showSearch,handleSearchShow, onChangeSearch}) => {

    // handleSearchShow={handleSearchShow}
    // showSearch={showSearch}
    // setToggleShowSearch={setToggleShowSearch}



// animation width xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    const inputWidth = useSharedValue(0);  // Используем SharedValue для анимации ширины TextInput


    useEffect(() => {
        // Вычисляем ширину: общая ширина экрана минус 26px
        const targetWidth = showSearch ? wp(95) - 26 : 60;
        inputWidth.value = withTiming(targetWidth, {duration: 300}); // Анимация с продолжительностью 300ms
    }, [showSearch]);

    // Анимируем стиль TextInput
    const animatedInputStyle = useAnimatedStyle(() => {
        return {
            width: inputWidth.value, // Применяем анимированную ширину
        };
    });

    // console.log('showSearch',showSearch)


// animation width xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    return (
        <View className="relative z-50 flex-row justify-end  items-center  p-1
                    {/*border-2 border-red-500*/}
                   "
        >
            <Animated.View
                className="flex-row justify-end items-center rounded-full w-auto pb-3
                h-[60]
            "
                // style={{width:showSearch ? 0 : '100%'}}
                style={[{backgroundColor: theme.bgWhite(0.2)}, animatedInputStyle]}

            >
                {
                    showSearch  && <TextInput
                        placeholder={showSearch ? "Search city" : ''}
                        placeholderTextColor="lightgray"
                        className="pl-6 h-10  text-base text-white  w-full "
                        value={textSearchInput}
                        onChangeText={value => onChangeSearch(value)}
                    />
                }




            </Animated.View>
            <TouchableOpacity
                onPress={handleSearchShow}
                style={{backgroundColor: theme.bgWhite(0.3)}}
                className="rounded-full w-[52] h-[52px] items-center justify-center absolute right-2"
            >
                <MagnifyingGlassIcon size="25" color="white"/>
            </TouchableOpacity>
        </View>
    );
};


export default SearchComponent;
