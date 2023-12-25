import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView, Pressable, TextInput, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SvgUri } from 'react-native-svg';


export default function Home({navigation, route}) {
  const MenuIcon = require('../assets/Menu.png');
  const SearchIcon = require('../assets/SearchIcon.png');


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => { setIsEnabled(!isEnabled) }
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => { setIsEnabled2(!isEnabled2) }

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
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px] text-[#525F7F]'>Buttons</Text>
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
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px] text-[#525F7F]'>Typography</Text>
                <Text className='mt-[11px] text-[44px] font-[400] leading-[60px] text-[#32325D]'>Heading 1</Text>
                <Text className='mt-[11px] text-[40px] font-[400] leading-[55px] text-[#32325D]'>Heading 2</Text>
                <Text className='mt-[11px] text-[32px] font-[400] leading-[43px] text-[#32325D]'>Heading 3</Text>
                <Text className='mt-[11px] text-[24px] font-[400] leading-[33px] text-[#32325D]'>Heading 4</Text>
                <Text className='mt-[11px] text-[18px] font-[400] leading-[24px] text-[#32325D]'>Heading 5</Text>
                <Text className='mt-[11px] text-[16px] font-[400] leading-[22px] text-[#32325D]'>Paragraph</Text>
                <Text className='mt-[11px] text-[16px] font-[400] leading-[22px] text-[#8898AA]'>This is a muted paragraph.</Text>

                {/* Inputs */}
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px] text-[#525F7F]'>Inputs</Text>
                <View className="w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#11CDEF] rounded-[4px] justify-center	 items-start">
                  <TextInput
                    placeholder="Regular"
                    className="w-full"
                  />
                </View>
                <View className="w-full h-[43px] mt-[27px] p-[12px] bg-[#E9ECEF] border-[1px] border-[#CAD1D7] rounded-[4px] justify-center	 items-start">
                  <TextInput
                    editable={false}
                    placeholder="Regular"
                    className="w-full"
                  />
                </View>
                <View className="flex flex-row w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#CAD1D7] rounded-[4px] justify-left	 items-center">
                  <Image 
                    className="flex"
                    source={SearchIcon}
                  />
                  <TextInput
                    className="flex ml-[14px] w-full"
                    placeholder="Search"
                  />
                </View>
                <View className="flex flex-row w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#CAD1D7] rounded-[4px] justify-left	 items-center">
                  <TextInput
                    className="flex w-full"
                    placeholder="Birthday"
                  />
                  <Image 
                    className="flex left-[-15px]"
                    source={SearchIcon}
                  />
                </View>
                <View className="flex flex-row w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#2DCE89] rounded-[4px] justify-left	 items-center">
                  <TextInput
                    className="flex-1 w-full"
                    placeholder="Success"
                    placeholderTextColor="#2DCE89"
                  />
                  <Image 
                    className="flex"
                    source={SearchIcon}
                  />
                </View>
                <View className="flex flex-row w-full h-[43px] mt-[27px] p-[12px] border-[1px] border-[#FB6340] rounded-[4px] justify-left	 items-center">
                  <TextInput
                    className="flex-1 w-full"
                    placeholder="Error Input"
                    placeholderTextColor="#FB6340"
                  />
                  <Image 
                    className="flex"
                    source={SearchIcon}
                  />
                </View>

                {/* Switches */}
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px] text-[#525F7F]'>Switches</Text>
                <View className="flex flex-row w-full  mt-[18px] justify-left	 items-center">
                  <Text className="flex-1 text-[14px] font-[400] leading-[19px] text-[#525F7F]">Switch is ON</Text>
                  <Switch  className="flex flex-end"
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#5E72E4' : '#E9ECEF'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View><View className="flex flex-row w-full  mt-[18px] justify-left	 items-center">
                  <Text className="flex-1 text-[14px] font-[400] leading-[19px] text-[#525F7F]">Switch is OFF</Text>
                  <Switch  className="flex flex-end"
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled2 ? '#5E72E4' : '#E9ECEF'}
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                  />
                </View>


                {/* Table Cell */}
                <Text className='mt-[44px] ml-[16px] text-[16px] font-[700] leading-[22px] text-[#525F7F]'>Table Cell</Text>
                <View className="flex flex-row w-full  mt-[18px] justify-left	 items-center">
                  <Text className="flex-1 text-[14px] font-[400] leading-[19px] text-[#525F7F]">Manage Options</Text>
                  <Image 
                    className="flex"
                    source={SearchIcon}
                  />
                </View>

            </View>


            <View className="w-full h-[50px]"></View>
          </ScrollView>
      </SafeAreaView>
    </View>
  );
}
