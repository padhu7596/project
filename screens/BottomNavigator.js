import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/COLORS';
import {View,Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: true,
        activeTintColor: COLORS.primary, 
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon:  ({ focused }) => (
            <Icon name="home-filled"  color={focused ? '#006400' : 'gray'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="local-mall" 
            color={focused ? '#006400' : 'gray'}
            size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon:  ({ focused }) => (
            <View>
              <Icon name="category" color={focused ? '#006400' : 'gray'} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon:  ({ focused }) => (
            <Icon name="favorite" color={focused ? '#006400' : 'gray'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon:  ({ focused }) => (
            <Icon name="shopping-cart" color={focused ? '#006400' : 'gray'} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function Orders() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders!</Text>
    </View>
  );
}

function Categories() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categories!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}
export default BottomNavigator;