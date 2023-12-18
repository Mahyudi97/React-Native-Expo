import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SvgUri } from 'react-native-svg';


export default function Home({navigation, route}) {
  const MenuIcon = require('../assets/Menu.svg');

  const onClickGetStarted = () => {
    console.log('Go to home')
    navigation.navigate('Profile')
  }

  return (
    <SafeAreaView className="flex-1 bg-white ">
        <View className="top-0 w-full h-[44px] bg-white justify-center	 items-left	">
            {/* <SvgUri
              width="500px"
              height="500px"
              uri={MenuIcon}
            /> */}
            <Text className='ml-[24px] text-[16px] font-[700] leading-[22px]'>Components</Text>
        </View>
        <View className="h-full bg-[#F8F9FE] mx-[16px]">
          <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px]'>Buttons</Text>
          <Pressable className='mt-[21px] w-full  h-[48px] bg-[#172B4D] rounded-[4px]  justify-center items-center'>
            <Text className='text-white text-[16px] font-[700] leading-[22px]'>Default</Text>
          </Pressable>
          <Pressable className='mt-[21px] w-full h-[48px] bg-[#F7FAFC] shadow rounded-[4px]   justify-center items-center'>
            <Text className='text-black text-[16px] font-[700] leading-[22px]'>Secondary</Text>
          </Pressable>
          <Pressable className='mt-[21px] w-full h-[48px] bg-[#5E72E4] rounded-[4px]   justify-center items-center'>
            <Text className='text-white text-[16px] font-[700] leading-[22px]'>Primary</Text>
          </Pressable>
          <Pressable className='mt-[21px] w-full h-[48px] bg-[#11CDEF] rounded-[4px]   justify-center items-center'>
              <Text className='text-white text-[16px] font-[700] leading-[22px]'>Info</Text>
            </Pressable>
            <Pressable className='mt-[21px] w-full h-[48px] bg-[#2DCE89] rounded-[4px]   justify-center items-center'>
              <Text className='text-white text-[16px] font-[700] leading-[22px]'>Success</Text>
            </Pressable>
            <Pressable className='mt-[21px] w-full h-[48px] bg-[#FB6340] rounded-[4px]   justify-center items-center'>
              <Text className='text-white text-[16px] font-[700] leading-[22px]'>Warning</Text>
            </Pressable>
            <Pressable className='mt-[21px] w-full h-[48px] bg-[#F5365C] rounded-[4px]   justify-center items-center'>
              <Text className='text-white text-[16px] font-[700] leading-[22px]'>Error</Text>
            </Pressable>
            <View className="flex flex-row">
              <Pressable className='mt-[21px] mr-[17px] flex-auto w-[100px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-left'>
                <Text className='text-white text-[16px] font-[700] leading-[22px]'>01</Text>
              </Pressable>
              <Pressable className='mt-[21px] mr-[17px] flex-auto w-[74px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-center'>
                <Text className='text-white text-[16px] font-[700] leading-[22px]'>Delete</Text>
              </Pressable>
              <Pressable className='mt-[21px] flex-auto w-[137px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-center'>
                <Text className='text-white text-[16px] font-[700] leading-[22px]'>Save for later</Text>
              </Pressable>
            </View>
        </View>
        
        {/* <Button
            title="Go Back"
            onPress={() =>
                navigation.navigate('MainPage')
            }
        /> */}
    </SafeAreaView>
  );
}
