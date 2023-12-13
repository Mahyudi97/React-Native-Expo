import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView } from 'react-native';

export default function Home({navigation}) {
  const [isModalVisible,setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: '#281483, #8F6ED5, #D782D9', alignItems: 'center',  justifyContent: 'center'}}>
        <Text>Home</Text>
        <Button
            title="Go to profile"
            onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
            }
        />
        {/* <Button title='Press' color={'midnightblue'} onPress={()=> { setIsModalVisible(true)}}></Button>
        <Modal 
          visible={isModalVisible}
          animationType='slide'
          presentationStyle='formSheet'>
          <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center',  justifyContent: 'center'}}>
            <Button title='Alert' color={'green'} onPress={()=> { Alert.alert('Alert!','Pick one',[
              {
                text: 'Left',
                onPress: ()=> { console.log('left')}
              },
              {
                text: 'Right',
                onPress: ()=> { console.log('right')}
              }
            ])}}></Button>
            <Button title='X' color={'midnightblue'} onPress={()=> { setIsModalVisible(false)}}></Button>
          </View>
        </Modal> */}
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
