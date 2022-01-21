import React, {Component, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from '../screens/Search';
import Wishlist from '../screens/Wishlist';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import App from '../../App';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="Home"
        component={App}
        options={({navigation, route}) => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icon name="home" color={'blue'} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({navigation, route}) => ({
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icon name="search" color={'blue'} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={Wishlist}
        options={({navigation, route}) => ({
          title: 'Favorite',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="favorite" color={'blue'} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({navigation, route}) => ({
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icon name="account-circle" color={'blue'} size={20} />
          ),
        })}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={({navigation, route}) => ({
          title: 'Setting',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icon name="settings" color={'blue'} size={20} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
