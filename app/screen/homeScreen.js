import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Image,  Dimensions, SafeAreaView} from 'react-native';
import { images } from '@/constants';
import {hp, wp} from "@/helpers/common";

const HomeScreen = () => {
    return (
        <View className="bg-red-500 flex-1 w-full h-full absolute"
              style={{height:hp(100), width:wp(100)}}
        >
            <Image
                source={images.bg}
                className="w-full h-full"

            />
        </View>
    );
};



export default HomeScreen;
