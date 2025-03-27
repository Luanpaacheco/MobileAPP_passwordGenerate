
import{useState} from 'react'
import {View, Text, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react'
import Slider from '@react-native-community/slider'

export default function index(){

  const[size, setSizer] = useState(10)

  return(
    <View style={styles.container}>
      <Image 
      source={require('../src/assets/logo.png')}  
      style={styles.logo}
      />
      <Text style = {styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F3f3f3",
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    marginBottom:60,
  },
  title:{
    fontSize:30,
    fontWeight: 'bold'
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding:8
  },
  btn:{
    backgroundColor: '#FFA200',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding:2,
    borderRadius: 8
  },
  btn_text:{
    color: '#FFF',
    fontSize:20
  } 
})