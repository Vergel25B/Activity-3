import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View ,  } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import React from 'react';
import ViewWithLoading from '../components/VIewWithLoading';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return  (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        height: '99%',
        width: '99%',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        borderWidth: 5,
        elevation: 5,
        flexDirection: 'column'
      }}>
        
        <View style={{flex: 1, borderRadius: 10, overflow: 'hidden', alignItems: 'center', backgroundColor: 'lightblue' }}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-256.png'}}
            style={{
              height: '50%',
              width: '60%',
              resizeMode: 'contain',
              marginTop: 50,
            }}/>
            
        </View >
  
        <View style={{ 
          flex: 0.4, 
          borderRadius: 10, 
          marginVertical: 5, 
          padding: 10, 
          backgroundColor: 'lightblue' 
          }}>
          <Text style={{
            fontSize: 15,
            color: 'black',
            fontFamily: 'poppins-semi-bold'
          }}>USERNAME*</Text>
        <View style={{ 
          flex: 0, 
          borderRadius: 20, 
          marginVertical: 10, 
          padding: 20, 
          backgroundColor: "white",
          borderWidth: 5,
          borderColor: 'blue',
          
           }}>
        </View>  
        </View>  
  
        <View style={{ 
          flex: .4, 
          borderRadius: 10, 
          marginVertical: 5, 
          padding: 10, 
          backgroundColor: 'lightblue',
           }}>
          <Text style={{
            fontSize: 15,
            color: 'black',
            fontFamily: 'poppins-semi-bold',
            
          }}>PASSWORD*</Text>
        <View style={{ 
           flex: 0, 
           borderRadius: 20, 
           marginVertical: 10, 
           padding: 20, 
           backgroundColor: "white",
           borderWidth: 5,
           borderColor: 'blue',
            }}>
          
        </View>  
        </View>
       
        <Text style={{
            fontSize: 15,
            color: 'black',
            
          }}>Login    I    Forgot Password?</Text>
              
              <Text style={{
            fontSize: 12,
            color: 'black',
            
          }}>Sign Up Now</Text>
      </View>
    </View>
  );
  }