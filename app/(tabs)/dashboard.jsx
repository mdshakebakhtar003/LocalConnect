import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView >
      <View style={{ width: '100%', height: 60, marginTop: 0, backgroundColor: 'white' }}>
      <Text style={{fontWeight:'bold',color:'black',marginLeft:15,padding:10,fontSize:20}}>Dashboard</Text></View>
    
      <View>
        <Text style={{fontSize:18,marginLeft:15,marginTop:10,fontWeight:'bold',marginBottom:10}}>Welcome back</Text>

      </View>
      <View style={{height:140,backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:10,padding:10}}>
        <Text style={{marginTop:20,marginLeft:10}}>Quick Actions</Text>
        <View style={{flexDirection:'row',marginTop:20}}> 
          <View>
          <Pressable style={{marginLeft:5,width:150 ,height:50,backgroundColor:'navy',borderRadius:10}}>
            <Text  style={{fontSize:16,color:'white',paddingLeft:15,paddingRight:10,paddingTop:10}}>Book Service</Text>
          </Pressable>
          </View>
          <View>
            <Pressable style={{marginLeft:5,width:150,height:50,backgroundColor:'navy',borderRadius:10}}>
            <Text style={{fontSize:16,color:'white',paddingLeft:15,paddingRight:10,paddingTop:10}}>My Bookings</Text>
          </Pressable>
          </View>
        </View>
      </View>
      <Text style={{fontSize:18,marginLeft:15,marginTop:10,marginBottom:10,fontWeight:'bold',fontSize:18}}>
        Upcoming Services
      </Text>
      <View style={{height:150,backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:10,padding:10}}>
        <Text>
          Home Cleaning
        </Text>
        <Text>
          Service by:Amit Verma
        </Text>
        <Text>
          2025-04-10


        </Text>
        <Text>
          10:00 AM
        </Text>
        <Text>
          123 Main St, Bangalore
        </Text>
        <Pressable>
        <Text>View Details</Text>
        </Pressable>
      </View>
    <Text style={{fontSize:18,marginLeft:15,marginTop:10,marginBottom:10,fontWeight:'bold',fontSize:18}}>
      Recent Service History
    </Text>
     
     <View style={{height:80,backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:10,padding:10}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text>
      Plumbing Service</Text>
<Text style={{color:'navy'}}>₹450</Text></View>
    
    <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text>
      Date: 2025-03-25</Text>
<Text>Worker: Amit Kumar</Text></View>
    
   
    <Text>
      4.5
    </Text>
     </View>
     <View style={{marginTop:10,height:80,backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:10,padding:10}}>
     <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text>
      Salon at Home</Text>
<Text style= {{color:'navy'}}>₹750</Text></View>
 <View style={{flexDirection:'row', justifyContent:'space-between'}}><Text>
      Date: 2025-03-20</Text>
<Text>Worker: Priya Singh</Text></View>
    <Text>
      5.0
    </Text>
     </View>
     <View>
      <Text style={{color:'navy',fontSize:16,marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}}>
        View All History
      </Text>
     </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})