import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, FlatList,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import categories from '../../Data/categories'
import Cleaning from '../components/Cleaning'
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
const Index = () => {
    const navigation = useNavigation();
   const [text, onChangeText] = React.useState('');



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.lgo} >
          <Image source={require('../../assets/Logo.png')} style={styles.img} />
          <Text style={styles.txt}>LocalConnect</Text>
        </View>
        <Image source={require('../../assets/menu.png')} style={styles.menu} />
      </View>
      <View style={styles.searchdiv}>
        <Image source={require('../../assets/icon.png')} style={styles.icon} /> 
        <Pressable style={styles.searchBox}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search for services"
                    placeholderTextColor="#888"
                  />
                </Pressable>
                <Text>{text}</Text>
      </View>
      <View>
        <Text style={styles.services}>
          Most Booked Categories
        </Text>
        <FlatList
          style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
             <Link href={`/components/Cleaning`} asChild style={{ alignItems: 'center', marginLeft: 20, backgroundColor: 'white', borderRadius: 5, padding: 10 }}>
              <TouchableOpacity>
            
             
              <Image source={item.Icon} style={styles.caticon} />
              <Text style={styles.catname}>{item.name}</Text>
              
            
            </TouchableOpacity>
</Link>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      <View style={{ flex: 1 }}>
        <Text style={styles.services}>
          Categories
        </Text>
        <FlatList
          data={categories}
          numColumns={3}
          key={'3columns'}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            paddingHorizontal: 10,
            justifyContent: 'center',
            flexGrow: 1, 
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <Image source={item.Icon} style={styles.caticon1} />
              <Text style={styles.catname1}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginLeft: 15,
  },
  txt: {
    fontSize: 30,
    color: 'white', 
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 30,
  },
  container: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 250,
    width: '100%',
    backgroundColor: 'navy',
  },
  lgo: {
    flexDirection: 'row',
    width: 192.58,
    height: 71.42
  },
  menu: {
    width: 30,
    height: 30,
    marginTop: 30,
  },
  searchdiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 1,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  searchtxt: {
    marginLeft: 20,
    opacity: 0.5,
  },
  icon: {
    opacity: 0.5,
    height: 24,
    width: 24,
  },
  services: {
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  caticon: {
    width: 50,
    height: 50,
    marginLeft: 0,
  },
  catname: {
    fontSize: 16,
    color: 'black',
    //fontWeight: 'bold',
  },
  id: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 1,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  gridItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '30%', 
    alignItems: 'center',
  },
  caticon1: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  catname1: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
})