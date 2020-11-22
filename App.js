 /**
  * @author Evgeniya Zemlyanaya @zzemlyanaya
  */

 'use strict';
 import React, { Component } from 'react';
 import {
   StyleSheet,
   TouchableOpacity,
   Text,
   View,
   Alert,
   Linking,
   Image
 } from 'react-native';

const App= () => {

const helloAlert = () => {
       alert('Hi there!');
     };

  return (
   <View style={styles.container}>
     <TouchableOpacity activeOpacity = { .7 } onPress={helloAlert}>
         <Image style={styles.imageLogo} source={require('./assets/drawable/logo_round.png')} />
     </TouchableOpacity>
     <View>
       <Text style={styles.text}>Евгения Земляная</Text>
       <Text
          style={styles.textLink}
          onPress={() => Linking.openURL('https://github.com/zzemlyanaya')}>
            @zzemlyanaya
       </Text>
     </View>
     <Image style={styles.image} source={require('./assets/drawable/rocket.png')} />
   </View>
  );
};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 32,
     textAlign: 'center',
     color: '#000000',
     fontFamily: 'Roboto',
     fontStyle: 'normal',
     fontWeight: '200',
   },
   textLink: {
     fontSize: 32,
     textAlign: 'center',
     color: '#0089FF',
     fontFamily: 'Roboto',
     fontStyle: 'normal',
     fontWeight: '200',
     textDecorationLine: 'underline'
   },
   imageLogo: {
     justifyContent: 'center',
     marginBottom: 48
   },
   image: {
     marginTop: 128
   }
 });

 export default App;
