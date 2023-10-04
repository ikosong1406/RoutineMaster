import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native'
import React from 'react'
import Colors from '../components/Colors';
import { useFonts } from 'expo-font'; 
import { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import firebase from '../../firebase/firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('window')

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // const handleSignup = async () => {
  //   try {
  //     if (username && email && password && agreeTerms) {
  //       await firebase.auth().createUserWithEmailAndPassword(email, password);
  //       alert('Signup successful');
  //     } else {
  //       alert('Please fill in all fields and agree to the terms.');
  //     }
  //   } catch (error) {
  //     alert('Signup failed: ' + error.message);
  //   }
  // };


  const handleSignup= async(username, email,password)=>{
    // Keyboard.dismiss()
      if(!email)
      {
          Alert.alert("Email can't be empty");
      }
      else if(!EmailRegex.test(email))
      {
          Alert.alert("Email is not in the right format")
      }
      else if(!password && password.trim() && password.length<5)
      {
          Alert.alert("Password is too weak and required min 6 characters")
      }
      else{
      try{
          const Email=await firebase.auth().createUserWithEmailAndPassword(email,password)
          Email.user.updateProfile({displayName:username})
          Email.user.reload()
          
          setUsername("")
          setEmail("")
          setPassword("")
         props.navigation.navigate('Login')
    }
      catch(error)
      {
          console.log("error", error.message, error.code)
          switch (error.code)
          {
            
          case "auth/weak-password":
         Alert.alert("Password is invalid,requires min 6 char")
         break;
         case "auth/email-already-in-use":
           Alert.alert("Email is already registered")
           break;
           default:
             Alert.alert("Error")
          }
      }
    }
  }


  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/images/task.jpg')}
        style={styles.image}
        />

        <View style={styles.c1}>
            <Text style={styles.text}> Sign Up</Text>

            <View style={{padding: width * 0.08, marginTop: height * 0.03}}>
                <View style={{flexDirection: 'row', borderWidth: width * 0.005, borderColor: Colors.white, borderRadius: 8, paddingVertical: height * 0.01}}>
                <FontAwesome name="user" size={width * 0.06} color={Colors.darkGray} style={{marginLeft: width * 0.05}} />
                    <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={{flexDirection: 'row', borderWidth: width * 0.005, borderColor: Colors.white, borderRadius: 8, paddingVertical: height * 0.01, marginTop: height * 0.02,}}>
                    <FontAwesome5 name="envelope" size={width * 0.06} color={Colors.darkGray} style={{marginLeft: width * 0.05}} />
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={{flexDirection: 'row', borderWidth: width * 0.005, borderColor: Colors.white, borderRadius: 8, paddingVertical: height * 0.01, marginTop: height * 0.02,}}>
                    <FontAwesome5 name="lock" size={width * 0.06} color={Colors.darkGray} style={{ marginLeft: width * 0.05}}  />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={styles.termsContainer}>
                <Checkbox checked={agreeTerms} onPress={() => setAgreeTerms(!agreeTerms)} style={styles.checkbox} />
                {/* Replace with your checkbox component */}
                <Text style={styles.termsText}>
                I agree to the{' '}
                <Text style={styles.termsLink}>Terms and Conditions</Text>
                </Text>
                </View>

                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={handleSignup}
                >
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginLink}>
                <Text style={styles.loginLinkText} onPress={handleLogin}>Already Have an Account?</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  image: {
    height: height * 0.3,
    width: width * 1,
    zIndex: 1,
},
c1: {
    backgroundColor: Colors.lightBlue,
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: width * 0.5,
    zIndex: 2,
    marginTop: height * -0.15,
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
  signupButton: {
    backgroundColor: Colors.vibrantOrange,
    borderRadius: 8, 
    marginTop: height * 0.02, 
    paddingVertical: height * 0.01,
    width: '60%',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  signupButtonText: {
    color: Colors.darkGray, 
    fontWeight: '700', 
    fontSize: width * 0.06, 
    textAlign: 'center'
  },
  termsContainer: {
    marginTop: height * 0.05,
    flexDirection: 'row',
  },
  checkbox: {
    marginTop: height * 0.015,
    marginLeft: width * 0.02
  },
  termsText: {
    fontSize: width * 0.05,
    fontWeight: '400',
    marginLeft: width * 0.03,
  },
  termsLink: {
    color: Colors.lightGray,
    fontSize: width * 0.05,
    fontWeight: '400',
    marginLeft: width * 0.03,
  },
  loginLink: {
    /* Styles for login link container */
  },
  loginLinkText: {
    fontSize: width * 0.05,
    fontWeight: '400',
    marginLeft: width * 0.03,
    color: Colors.lightGray,
    textAlign: 'center',
  },
});

export default SignupScreen;
