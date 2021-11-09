import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ExcerciseOne = () => {
    const myName = "Marek"
    return (
        <View>
            <Text style={styles.headerText}>Getting started with React Native!</Text>
            <Text style={styles.regularText}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 45
    },
    regularText: {
        fontSize: 20
    }
});

export default ExcerciseOne;
