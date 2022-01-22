import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';

export default function Setting({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[{flex: 1, backgroundColor: '#f4f4f4', padding: 20}, {}]}>
        <Text
          style={[
            {
              color: 'blue',
            },
            {fontSize: 25, fontWeight: 'bold', marginTop: 20},
          ]}>
          Setting
        </Text>
        <View
          style={[
            {
              flex: 1,
              backgroundColor: '#f4f4f4',
              padding: 20,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            },
            {},
          ]}>
          <Text
            style={[
              {fontSize: 14, color: 'blue'},
              {fontSize: 20, fontWeight: 'bold', marginTop: 40},
            ]}></Text>
          <ActivityIndicator size="large" color="red" />
        </View>
      </View>
    </SafeAreaView>
  );
}
