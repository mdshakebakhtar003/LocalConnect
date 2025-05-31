import { StyleSheet, Text, View ,FlatList,Image, Pressable} from 'react-native'
import React from 'react'
import clean from '../../Data/clean'
import star from '../../assets/star.png'

const Cleaning = () => {
  return (
    <View>
       <FlatList
          style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}
          data={clean}
          vertical
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (

              <View style={{ marginTop:5, marginLeft: 5, backgroundColor: '', borderRadius: 5, padding: 10,height:150 }}>
            
             <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'white',borderRadius:10,padding:10,height:150}}>
              <Image source={item.Icon} style={{height:30,width:30}} />
              <View>
              <Text style={styles.catname}>{item.name} </Text>
              <Text style={styles.catname}>{item.experience} experience</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.catname}>{item.rating} </Text>
                <Image source={star} style={{height:15,width:15}} />
              </View>
              <Text style={styles.catname}>{item.price}</Text>
              </View>
              <Pressable style={{marginTop:2,backgroundColor:'navy',borderRadius:5,padding:5}}>
              <Text style={{color:'white',fontSize:16}}>Book Now</Text></Pressable>
            </View>
            
            </View>

          )}
          keyExtractor={(item) => item.id}
        />

    </View>
  )
}

export default Cleaning

const styles = StyleSheet.create({})