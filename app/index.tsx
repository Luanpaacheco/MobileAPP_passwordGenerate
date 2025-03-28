
import{useState} from 'react'
import {View, Text, StyleSheet, Image, Touchable, TouchableOpacity, Modal} from 'react-native';
import React from 'react'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '@/src/components/modal/modal';

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_"

export default function index(){

  const[size, setSize] = useState(10)
  const[passwordvalue, setPasswordvalue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = ''
    for(let i =0, n = charset.length; i < size; i++){
      password+=charset.charAt(Math.floor(Math.random()*n))
    }
    setPasswordvalue(password)
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image 
      source={require('../src/assets/logo.png')}  
      style={styles.logo}
      />
      <Text style = {styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#000"
        value={size}
        onValueChange={(value) => setSize(Number(value.toFixed(0)))}/>
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btn_text}>Gerar senha</Text>
        
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordvalue} handleClose={()=>setModalVisible(false)}/>
      </Modal>
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