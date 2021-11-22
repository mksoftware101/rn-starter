import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const CounterScreen = ({title, imageSource, score}) => {
    const [counter, setCounter] = useState(0); // array destructuring
    return (
        <View>
            <Button title="Increase" onPress={() => {
                // Don't modify variable directly
                // counter++;
                setCounter(counter + 1);
            }}/>
            <Button title="Decrese" onPress={() => {
                setCounter(counter - 1);
            }}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
}

const style = StyleSheet.create({});

export default CounterScreen
