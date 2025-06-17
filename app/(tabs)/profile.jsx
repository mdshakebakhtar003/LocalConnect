import { Pressable, StyleSheet, Text, View, Modal,TextInput,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'

const index = () => {
  const [bgcolor, setbgcolor] = React.useState('navy');
  const [modalVisible, setModalVisible] = React.useState(false);
const [text, onChangeText] = React.useState('');
const [number,setNumber]=React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modal with blur and green view */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        
          }}>
            <View style={{height:350,backgroundColor:'white',width:'90%'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginLeft:10}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Edit your Profile</Text>
            <Pressable onPress={() => setModalVisible(false)}>
                <Image source ={require('../../assets/close.png')} style={{ height:18,width:18 }}/>
              </Pressable>
            </View>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold',marginTop:20,marginLeft:10 }}>Full name</Text>
                      <View style={{marginLeft:10,marginTop:20,borderColor:'lightgrey',borderWidth:1,borderRadius:10}}>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeText}
                          value={text}
                          placeholder="Search for services"
                          placeholderTextColor="black"
                        />
                      </View>
               <Text style={{ color: 'black',fontWeight:'bold', fontSize: 16,marginLeft:10,marginTop:20 }}>Phone no</Text>
              <View style={{marginLeft:10,marginTop:20,borderColor:'lightgrey',borderWidth:1,borderRadius:10}}>
               <TextInput
  style={styles.input}
  onChangeText={setNumber}
  value={number}
  placeholder="Enter phone no"
  keyboardType="numeric"
   placeholderTextColor="black"
/>
</View>
<Pressable style={{backgroundColor:'navy',marginTop:20,marginLeft:190,borderRadius:20,height:50,width:120}}>
  <Text style={{color:'white',padding:10,fontWeight:'bold'}}>
    Save Changes
  </Text>
</Pressable>
                        
              
            </View>
          </View>
         
        </BlurView>
      </Modal>

      {/* Main content */}
      <View style={{ width: '100%', height: 60, marginTop: 0, backgroundColor: 'white' }}>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={{ width: '100%', height: 200, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View>
            <Pressable style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: 'lightgray', marginLeft: 10 }} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
              Md Shakeb Akhtar
            </Text>
            <Text style={{ marginTop: 2 }}>
              6301467605
            </Text>
            <Text>
              Howarh,West Bengal
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            marginTop: 20,
            backgroundColor: bgcolor,
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          onPress={() => {
            setbgcolor(bgcolor === 'red' ? 'navy' : 'red');
            setModalVisible(true);
          }}
        >
          <Text style={{ padding: 15, marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
            Edit Profile
          </Text>
        </Pressable>
      </View>
      <View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Favourites
          </Text>
        </View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Service History
          </Text>
        </View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Payments
          </Text>
        </View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Privacy & Security
          </Text>
        </View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Help & Support
          </Text>
        </View>
        <View style={{ marginLeft: 30, height: 30, marginTop: 30 }}>
          <Text>
            Settings
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 10, height: 30, marginTop: 20 }}>
        <Text style={{ color: 'red' }}>
          Logout
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
    padding: 5,
    paddingBottom: 5,
  },
})