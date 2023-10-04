import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../components/Colors';
import { useFonts } from 'expo-font'; 

const { width, height } = Dimensions.get('window')

const Splash = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        'TiltPrism Variable': require('../../assets/fonts/LilitaOne-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }


  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/images/task.jpg')}
        style={styles.image}
        />
        <Text style={styles.text}> RoutineMaster</Text>
        <View style={{marginTop: height * 0.02}}>
        <Text style={styles.text1}> Stay organized and productive.</Text>
        <Text style={styles.text1}> Never miss a task or activity again!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}> Get Started </Text>
        </TouchableOpacity>
        <Image
        source={require('../../assets/images/task.jpg')}
        style={styles.image1}
        />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    flex: 1,
  },
  text: {
    fontFamily: 'TiltPrism Variable',
    fontSize: width * 0.13,
    color: Colors.vibrantOrange,
    marginTop: height * 0.1,
    textAlign: 'center'
  },
  text1: {
    color: Colors.darkGray,
    fontSize: width * 0.05,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  image: {
    width: width * 1,
    height: height * 0.2,
    borderBottomRightRadius: width * 0.5,
  },
  image1: {
    width: width * 1,
    height: height * 0.25,
    marginTop: height * 0.1,
    borderTopLeftRadius: width * 0.5,
  },
  button: {
    backgroundColor: Colors.vibrantOrange,
    width: width * 0.5,
    height: height * 0.05,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: height * 0.13,
  },
  buttonText: {
    color: Colors.darkGray,
    textAlign: 'center',
   marginTop: height * 0.01,
   fontSize: width * 0.05,
   fontWeight: '700',
  }
})