import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: 60 ,marginTop:0, backgroundColor: 'white' }}>
      <Text style={styles.more}>More</Text>
      </View>
      <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Help Center</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Contact us</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Refer & Earn</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Share App</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Send Feedback</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>Rate us</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more1}>About us</Text>
      </View>
       <View style={{width:'100%',height:60,marginTop:1,backgroundColor:'white'}}>
      <Text style={styles.more2}>Logout</Text>
      </View>
      <View>
      <Text style={{fontSize:16, fontWeight:'bold',color:'black', marginLeft:15, marginTop:10}}>Customer Support</Text>
      <Text style={{fontSize:11, color:'black', marginLeft:15, marginTop:10}}>Need help with your booking or service? Our team is here to assist you.</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10, marginLeft:15,marginRight:15, padding:5, backgroundColor:'navy', borderRadius:10,height:40}}>
      <Text style={{fontSize:16, fontWeight:'bold',color:'white',padding:5}}>Call customer support</Text>
      <Text style={{fontSize:16, color:'white',padding:5}}>1800-123-4567</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  more: {
    fontSize: 20,
    color: 'black',
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  more1: {
    fontSize: 16,
    color: 'black',
    marginLeft: 15,
    
    marginTop: 15,
  },
  more2: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    
    marginTop: 15,
  },

})