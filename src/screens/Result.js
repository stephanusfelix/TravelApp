import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function Result({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={[
          {fontSize: 14, color: '#1D1D1D'},
          {fontSize: 30, fontWeight: 'bold', marginBottom: 30},
        ]}>
        Result
      </Text>
    </SafeAreaView>
  );
}
