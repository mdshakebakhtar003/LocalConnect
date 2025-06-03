import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import painter from '../../Data/painter'
const providerprofile = () => {
  return (
    <View>
      <View style={{height:220,marginLeft:'auto',marginRight:'auto',marginTop:2,backgroundColor:'white',borderRadius:5,width:'90%'}}>
      <Pressable style={{borderRadius:50,backgroundColor:'white',height:80,width:80
        ,marginLeft:'auto',marginRight:'auto',marginTop:10}}>
        <Image source={require('../../assets/painter.png')} style={{height:80,width:80,borderRadius:50}}/>
      </Pressable>
      <Text style={{marginTop:5,marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}}>Harii</Text>
        <View style={{backgroundColor:'navy',borderRadius:10,marginLeft:'auto',marginRight:'auto',marginTop:2}}>
          <Text style={{color:'white',padding:5}}>Worker</Text>
        </View>
        <View style={{backgroundColor:'',borderRadius:0,marginLeft:'auto',marginRight:'auto',marginTop:2,flexDirection:'row',justifyContent:'space-around'}}>
          <Image source={require('../../assets/close.png')} style={{height:10,width:10,marginTop:6}}></Image>
          <Text style={{color:'green'}}>Verified</Text>
        </View>
        <View style={{backgroundColor:'',borderRadius:0,marginLeft:'auto',marginRight:'auto',marginTop:2,flexDirection:'row',justifyContent:'space-around'}}>
          <Image source={require('../../assets/close.png')} style={{height:10,width:10,marginTop:6}}></Image>
          <Text style={{color:'blue'}}>Location</Text>
        </View>
      </View>
      <Pressable style={{marginTop:-25,marginLeft:'auto',marginRight:'auto',backgroundColor:'navy',height:30,width:'60%',borderRadius:10}}>
        <Text style={{color:'white',fontWeight:'bold',padding:0,marginLeft:'auto',marginRight:'auto'}}>
          Book Service
        </Text>
      </Pressable>
      <View style={{height:200,marginLeft:'auto',marginRight:'auto',marginTop:5,backgroundColor:'white',borderRadius:5,width:'90%'}}>

      </View>
      <View style={{height:200,marginLeft:'auto',marginRight:'auto',marginTop:2,backgroundColor:'white',borderRadius:5,width:'90%'}}>
        
      </View>
    </View>
  )
}

export default providerprofile

const styles = StyleSheet.create({})