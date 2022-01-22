import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

export default function Favorite({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={[
          {
            color: 'blue',
          },
          {fontSize: 25, fontWeight: 'bold', marginTop: 40, marginLeft: 20},
        ]}>
        Favorite
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
          ]}>
          Data tidak ditemukan
        </Text>
      </View>
    </SafeAreaView>
  );
}
