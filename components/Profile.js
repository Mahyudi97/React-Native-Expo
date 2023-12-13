import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Alert, SafeAreaView } from 'react-native';

export default function Profile({navigation, route}) {
  const [isModalVisible,setIsModalVisible] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faebd7', alignItems: 'center',  justifyContent: 'center'}}>
        <Text>Profile</Text>
        <Text>Hi {route.params.name} !</Text>
        <Button
            title="Go Home"
            onPress={() =>
                navigation.navigate('Home')
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
    </SafeAreaView>
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
