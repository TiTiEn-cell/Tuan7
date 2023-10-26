import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Screen4_a from './Screen/Screen4_a';
import Screen4_b from './Screen/Screen4_b';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainHome = () =>{
  return (
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({color}) => {
      let iconName;

      if (route.name === 'List') {
        iconName = 'list';
      } else if (route.name === 'Home') {
        iconName = "home";
      }else if (route.name === 'Back') {
        iconName = "arrow-back";
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={32} color={'black'} />;
    },
    //tabBarActiveTintColor: 'red',
    //tabBarInactiveTintColor: 'gray',
    tabBarStyle:{
      backgroundColor: '#1BA9FF',
    }
  })}
  >
    <Tab.Screen name="List" component={Screen4_a} options= {{headerShown : false, tabBarLabel: ''}}/>
    <Tab.Screen name="Home" component={Screen4_b} options= {{headerShown : false,tabBarLabel: ''}}/>
    <Tab.Screen name="Back" component={Screen4_b} options= {{headerShown : false,tabBarLabel: ''}}/>
  </Tab.Navigator>
  )
  
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainHome" component={MainHome} options= {{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
