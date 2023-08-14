import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native'
import React from 'react'
import Colors from '../components/Colors';
import { useFonts } from 'expo-font'; 
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

const Login = () => {

    const [fontsLoaded] = useFonts({
        'TiltPrism Variable': require('../../assets/fonts/LilitaOne-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
    }

    const handleLogin = () => {
        // You can implement your authentication logic here
        // if (username === 'user' && password === 'password') {
        //   alert('Login successful');
        // } else {
        //   alert('Invalid credentials');
        // }
      };

  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/images/task.jpg')}
        style={styles.image}
        />
        <View style={styles.c1}>
             <Text style={styles.text}>Login</Text>
        
            <View style={{padding: width * 0.08, marginTop: height * 0.03}}>
                <View style={{flexDirection: 'row', borderWidth: width * 0.005, borderColor: Colors.white, borderRadius: 8, paddingVertical: height * 0.01}}>
                    <FontAwesome5 name="envelope" size={24} color={Colors.darkGray} style={{marginLeft: width * 0.05}} />
                    <TextInput
                    style={styles.input}
                    placeholder="Username"
                    // value={username}
                    onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={{flexDirection: 'row', borderWidth: width * 0.005, borderColor: Colors.white, borderRadius: 8, marginTop: height * 0.02, paddingVertical: height * 0.01}}>
                <FontAwesome5 name="lock" size={24} color={Colors.darkGray} style={{ marginLeft: width * 0.05}}  />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    // value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity style={{ marginTop: height * 0.015}}>
                    <Text style={{color: Colors.darkGray, textAlign: 'right', fontSize: width * 0.04}}> Forgot Password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} title="Login" onPress={handleLogin}>
                    <Text style={{color: Colors.darkGray, fontWeight: '700', fontSize: width * 0.06, textAlign: 'center'}}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    c1: {
        backgroundColor: Colors.lightBlue,
        width: width * 1,
        height: height * 1,
        borderTopLeftRadius: width * 0.5,
        zIndex: 2,
        marginTop: height * -0.15,
    },
    image: {
        height: height * 0.3,
        width: width * 1,
        zIndex: 1,
    },
    text: {
        fontFamily: 'TiltPrism Variable',
        fontSize: width * 0.17,
        color: Colors.vibrantOrange,
        marginTop: height * 0.1,
        textAlign: 'center'
    },
    input: {
        marginLeft: width * 0.03,
    },
    btn: {
        backgroundColor: Colors.vibrantOrange,
        borderRadius: 8, 
        marginTop: height * 0.02, 
        paddingVertical: height * 0.01,
        width: '60%',
        alignSelf: 'center',
        marginTop: height * 0.03,
    }
})