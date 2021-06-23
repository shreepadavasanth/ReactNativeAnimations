import React, { Component, useState, useRef, useEffect } from "react";
import { PanResponder, Text, StyleSheet, AppRegistry, Animated, View, TouchableWithoutFeedback, ScrollView } from "react-native";
import ComponentsScreen from './ComponentScreen'
const HomeScreen = props => {
  const opacityValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
  
  }, [])

  const startAnimation = () => {
   Animated.timing(opacityValue,{
     toValue:100,
     duration:1000,
     useNativeDriver:false
   },{useNativeDriver:false}).start()
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[styles.box, {transform: [
            {
              translateY:opacityValue
            },
            {
              translateX:opacityValue
            }
          ]}]}>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
  text: {
    fontSize: 30
  },
  content: {
    height: 3000
  }
});

export default HomeScreen;
