import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
        <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
    </View>
}

const style = StyleSheet.create({});

export default ColorCounter
