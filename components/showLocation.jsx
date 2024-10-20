import React from 'react';
import {View, Text,  TouchableOpacity} from 'react-native';
import {MapPinIcon} from "react-native-heroicons/solid";
import Animated, {FadeInUp} from 'react-native-reanimated';
const ShowLocation = ({location,setShowLocation,handleClick}) => {

    // console.log('ShowLocation location', JSON.stringify(location,null, 2));

  return (
      <Animated.View
          entering={FadeInUp.delay(100).springify()}
          className="w-full bg-neutral-300 absolute top-20 rounded-2xl overflow-hidden z-50"
      >
          {
              location.length > 0 && setShowLocation ? (
                      <View>
                          {
                              location.map((loc, index) => {

                                  let showBorder = index + 1 !== location.length;
                                  let borderClass = showBorder ? "border-b-2  border-gray-400" : '';

                                  return (
                                      <TouchableOpacity
                                          onPress={()=>handleClick(loc)}
                                          key={index}
                                          className={`flex-row items-center border-0 mb-1 p-4 ${borderClass}`}
                                      >
                                          <MapPinIcon size="24" color="gray"/>
                                          <View className="flex-col ml-2">
                                              <Text className="text-black text-lg  ">
                                                  {loc?.name},

                                              </Text>
                                              <Text className="text-sx">
                                                  region:{loc?.region}, country:{loc?.country}
                                              </Text>
                                          </View>


                                      </TouchableOpacity>
                                  )
                              })
                          }
                      </View>
                  )
                  : null
          }
      </Animated.View>
  );
};


export default ShowLocation;
