import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function Home({navigation}) {
  const [isModalVisible,setIsModalVisible] = useState(false)

  return (
    <View className="flex-1">
      <LinearGradient 
        colors={['#281483', '#8F6ED5', '#D782D9']}
        start={[0, 0]} end={[1, 1]}   location={[0.1, 0.4, 1]}
        className="w-full h-full px-[35px] py-[48px] ">
        <Text className='mt-[390px] font-[700] text-white text-[55px] leading-[57px]	'>Design System</Text>
        <Text className='mt-[38px] font-[400] text-white text-[16px] leading-[22px]	'>Fully coded React Native components.</Text>

        <Pressable className='absolute left-[35px] bottom-[48px] w-full h-[43px] bg-[#F7FAFC] justify-center	items-center rounded-[4px]'>
          <Text className='font-[700] text-[#212529] text-[14px] leading-[19px]'>Get Started</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
