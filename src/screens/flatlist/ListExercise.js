import React from "react";
import {Text, StyleSheet, FlatList} from "react-native";

const ListExercise = () => {
    const friends = [
        {name: "Friend #1", age: 10},
        {name: "Friend #2", age: 20},
        {name: "Friend #3", age: 30},
        {name: "Friend #4", age: 40},
        {name: "Friend #5", age: 50},
        {name: "Friend #6", age: 60},
        {name: "Friend #7", age: 70},
        {name: "Friend #8", age: 80},
        {name: "Friend #9", age: 90},
        {name: "Friend #10", age: 100},
    ];
    return (
        <FlatList
            data={friends}
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            renderItem={({item}) => {
                return <Text style={styles.itemStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        marginVertical: 30
    }
});

export default ListExercise
