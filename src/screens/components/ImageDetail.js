import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageDetail = props => {
    console.log(props)
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    );
}

const style = StyleSheet.create({});

export default ImageDetail
