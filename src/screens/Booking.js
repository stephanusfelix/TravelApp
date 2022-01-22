import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

export default function Setting({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            {fontSize: 30, fontWeight: 'bold', marginTop: 40},
          ]}>
          Booking Berhasil
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <TouchableOpacity
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'blue',
              fontSize: 16,
            }}>
            Kembali
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
