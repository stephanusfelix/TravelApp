import React, {useEffect} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../component/BottomTab';
import Login from '../screens/Login';
import Result from '../screens/Result';
import DetailHotel from '../screens/Detail';
import Booking from '../screens/Booking';
// import {checkExpireToken} from '../Utils/GlobalFunc';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      //   onStateChange={state => checkExpireToken(navigationRef)}
    >
      <Stack.Navigator initialRouteName={'BottomTab'}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailHotel}
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            title: '',
          })}
        />

        <Stack.Screen
          name="Booking"
          component={Booking}
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
