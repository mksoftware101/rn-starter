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
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
});

export default HomeScreen;
