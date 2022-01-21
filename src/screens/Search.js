import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function Search({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[{flex: 1, backgroundColor: '#f4f4f4', padding: 20}, {}]}>
        <Text
          style={[
            {fontSize: 14, color: '#1D1D1D'},
            {fontSize: 30, fontWeight: 'bold', marginBottom: 30},
          ]}>
          Search
        </Text>
      </View>
    </SafeAreaView>
  );
}
