import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SvgUri } from 'react-native-svg';


export default function Home({navigation, route}) {
  const MenuIcon = require('../assets/Menu.png');

  const onClickGetStarted = () => {
    console.log('Go to home')
    navigation.navigate('Profile')
  }

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView>
          <View className="flex flex-row items-center pt-[10px] pb-[20px] px-[18px]  bg-white">
            <Image 
                className="flex"
                source={MenuIcon}
              />
              <Text className='flex ml-[24px] text-[16px] font-[700]'>Components</Text>
          </View>
          <ScrollView className="h-full bg-[#F8F9FE]">
            <View className="mx-[16px]">
                {/* Button */}
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
                  <Pressable className='mt-[21px] mr-[17px] flex-auto w-[100px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-start'>
                    <Text className='text-white text-[16px] font-[700] leading-[22px]'>01</Text>
                  </Pressable>
                  <Pressable className='mt-[21px] mr-[17px] flex-auto w-[74px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-center'>
                    <Text className='text-white text-[16px] font-[700] leading-[22px]'>Delete</Text>
                  </Pressable>
                  <Pressable className='mt-[21px] flex-auto w-[137px] h-[48px] px-[8px] py-[14px] bg-[#172B4D] rounded-[4px]   justify-center items-center'>
                    <Text className='text-white text-[16px] font-[700] leading-[22px]'>Save for later</Text>
                  </Pressable>
                </View>


                {/* Typography */}
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px]'>Typography</Text>
                <Text className='mt-[11px] text-[44px] font-[400] leading-[60px] text-[#32325D]'>Heading 1</Text>
                <Text className='mt-[11px] text-[40px] font-[400] leading-[55px] text-[#32325D]'>Heading 2</Text>
                <Text className='mt-[11px] text-[32px] font-[400] leading-[43px] text-[#32325D]'>Heading 3</Text>
                <Text className='mt-[11px] text-[24px] font-[400] leading-[33px] text-[#32325D]'>Heading 4</Text>
                <Text className='mt-[11px] text-[18px] font-[400] leading-[24px] text-[#32325D]'>Heading 5</Text>
                <Text className='mt-[11px] text-[16px] font-[400] leading-[22px] text-[#32325D]'>Paragraph</Text>
                <Text className='mt-[11px] text-[16px] font-[400] leading-[22px] text-[#8898AA]'>This is a muted paragraph.</Text>

                {/* Inputs */}
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px]'>Inputs</Text>
                <View className="w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#11CDEF] rounded-[4px] justify-center	 items-start">
                  <TextInput
                    placeholder="Regular"
                  />
                </View>
                <View className="w-full h-[43px] mt-[27px] p-[12px] bg-[#E9ECEF] border-[1px] border-[#CAD1D7] rounded-[4px] justify-center	 items-start">
                  <TextInput
                    placeholder="Regular"
                  />
                </View>
                <View className="w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#CAD1D7] rounded-[4px] justify-center	 items-start">
                  <TextInput
                    placeholder="Search"
                  />
                </View>

            </View>
          </ScrollView>
          
          {/* <Button
              title="Go Back"
              onPress={() =>
                  navigation.navigate('MainPage')
              }
          /> */}
      </SafeAreaView>
    </View>
  );
}
