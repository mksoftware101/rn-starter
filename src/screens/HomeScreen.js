import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                style={styles.buttonStyle}
                title="Go to components demo"
                onPress={() => {
                    navigation.navigate('ComponentsScreen')
                }}
            />
            <Button
                title="Go to List Demo"
                onPress={() => {
                    navigation.navigate('List')
                }}
            />
            <Button
                title="Go to Image screen"
                onPress={() => {
                    navigation.navigate('ImageScreen')
                }}
            />
            <Button
                title="Go to Counter demo"
                onPress={() => {
                    navigation.navigate('CounterScreen')
                }}
            />
            <Button
                title="Go to Counter with Reducer demo"
                onPress={() => {
                    navigation.navigate('CounterWithReducer')
                }}
            />
            <Button
                title="Go to Color demo"
                onPress={() => {
                    navigation.navigate('ColorScreen')
                }}
            />
            <Button
                title="Go to Square screen"
                onPress={() => {
                    navigation.navigate('SquareScreen')
                }}
            />
            <Button
                title="Go to Text Demo"
                onPress={() => {
                    navigation.navigate('TextScreen')
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
});

export default HomeScreen;
