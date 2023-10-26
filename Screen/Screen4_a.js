import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
const goodsList = [
  {id: '1', image: require('../Image/ca_nau_lau.png'), info: 'Ca nấu lẩu, nấu mì mini..', shop: 'Shop Devang'},
  {id: '2', image: require('../Image/ga_bo_toi.png'), info: '1KG KHÔ GÀ BƠ TỎI..', shop: 'LTD Food'},
  {id: '3', image: require('../Image/xa_can_cau.png'), info: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi'},
  {id: '4', image: require('../Image/do_choi_dang_mo_hinh.png'), info: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi'},
  {id: '5', image: require('../Image/lanh_dao_gian_don.png'), info: 'Lãnh đạo giản đơn', shop: 'Minh Long Book'},
  {id: '6', image: require('../Image/hieu_long_con_tre.png'), info: 'Hiểu lòng con trẻ', shop: 'Minh Long Book'},
  {id: '7', image: require('../Image/trump 1.png'), info: 'Donal Trump Thiên tài lãnh đạo', shop: ''},
]

export default function Screen4_a() {
  return (
    
    <View style={styles.container}>
      <ScrollView>

      
      <View style = {styles.header}>
        <Image source={require('../Image/ant-design_arrow-left-outlined.png')} style = {styles.IconBack}/>
        <Text style = {styles.textChat}>Chat</Text>
        <Image source={require('../Image/bi_cart-check.png')} style = {styles.IconCart}/>
      </View>

      <View style = {{marginLeft: 35, marginTop: 10, marginRight: 10, }}>
        <Text style = {{fontSize: 18}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        
        <View>
        {goodsList.map((goods)=>
        <TouchableOpacity
        key = {goods.id}
        >
          <View style = {{borderTopWidth: 1, flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'}}>
          <Image source={goods.image} style = {{width: 74, height: 74,}}/>
          <View>
          <Text style = {{fontSize: 15, width: Dimensions.get('screen').width/2}} ellipsizeMode='tail' numberOfLines={1}>{goods.info}</Text>
          <Text style = {{fontSize: 15, marginTop: 10,}}>Shop: {goods.shop}</Text>
          </View> 
          <TouchableOpacity style = {{borderwidth:1, backgroundColor: 'red' ,marginTop: 20, marginRight: 30, width: 88, height: 38, alignItems: 'center', justifyContent: 'center'}}>
            <Text style ={{fontSize: 20, color: 'white'}}>Chat</Text>
          </TouchableOpacity>
          </View>
           
        </TouchableOpacity>
        )}
        </View>      
        </View>
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
  }
});
