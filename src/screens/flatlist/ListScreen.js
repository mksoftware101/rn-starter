import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Friend #1" }, // must be string, must be unique
        {name: "Friend #2" },
        {name: "Friend #3" },
        {name: "Friend #4" },
        {name: "Friend #5" },
        {name: "Friend #6" },
        {name: "Friend #7" },
        {name: "Friend #8" },
        {name: "Friend #9" }
    ];
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => { // todo destructuring
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical : 50
    }
});

export default ListScreen
