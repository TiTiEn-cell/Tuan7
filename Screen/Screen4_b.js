import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { FlatList } from 'react-native';

const goodsList = [
  {id: '10', image: require('../Image/4_b/giacchuyen 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
  {id: '2', image: require('../Image/4_b/daynguon 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
  {id: '3', image: require('../Image/4_b/dauchuyendoipsps2 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
  {id: '4', image: require('../Image/4_b/dauchuyendoi 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
  {id: '5', image: require('../Image/4_b/carbusbtops2 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
  {id: '6', image: require('../Image/4_b/daucam 1.png'),info:'Cáp chuyển từ Cổng USB sang PS2...'},
]


export default function Screen4_b() {
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style = {styles.header}>
        <Image source={require('../Image/ant-design_arrow-left-outlined.png')} style = {styles.IconBack}/>
        <Image source={require('../Image/whh_magnifier.png')} style = {{position: 'absolute',width: 24, height: 24, left: 75}}/>
        <TextInput style = {{backgroundColor: 'white', height: 30, paddingLeft: 30, }} textChat = 'day' placeholder='Dây cáp usb' placeholderTextColor={'grey'}/>
        <Image source={require('../Image/bi_cart-check.png')} style = {styles.IconCart}/>
        <Image source={require('../Image/Group 2.png')} style = {{width: 18, height: 4.36, marginRight: 20}}/>
      </View>
   
      <FlatList
          data={goodsList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={item.image} style={styles.productImage} />  
              <View style = {{marginLeft: 20,}}>
              <Text style={styles.productInfo}
              ellipsizeMode='tail'
              numberOfLines={2}
              >{item.info}</Text>
              <Image source={require('../Image/4_b/Group 4.png')} style = {{width: 106, height: 13}}/>
              <View  style = {{flexDirection: 'row'}}>
              <Text style = {{fontWeight: 'bold',}}>69.900 đ</Text>
              <Text style ={{color: 'grey', marginLeft: 10,}}>-39%</Text>
              </View>  
                </View>                  
                
            </View>
          )}
        />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header:{
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  IconBack:{
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  IconCart:{
    marginRight: 20,
    width: 30,
    height: 30,
  },
  textChat:{
    color: 'white',
    fontSize: 20,
  },
  footer:{
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  productItem: {
    marginTop: 20,
    marginLeft: 20,
    width: 180,
  },
  productImage: {
    width: 155,
    height: 90,
    marginRight: 10,
  },
  productInfo: {
    
    fontSize: 15,
  },
});
