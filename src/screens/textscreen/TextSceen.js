import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

const TextScreen = () => {
    const [inputText, setInputText] = useState('');
    const [warrning, setWarrning] = useState(true)

    return (
        <View>
            <TextInput style={styles.input}
                       onChangeText={(newValue) => {
                           setInputText(newValue)
                           setWarrning(newValue.length < 5)
                       }}
                       autoCapitalize="none"
                       autoCorrect={false}
                       value={inputText}
            />
            <Text>Text inputed: {inputText}</Text>
            {
                warrning ? (<Text style={styles.text}>Password must be longer than 5 characters</Text>) : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        color: '#ff0000',
    }
});

export default TextScreen
