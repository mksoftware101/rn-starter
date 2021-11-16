import React, {useReducer} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import ColorCounter from '../colors/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number};
    // action === {colorToChange: 'red' || 'green' || 'blue', amount 15 || -15}
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount} // return new object based on state and override red
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0} /* Initial value of our state object */)
    const {red, green, blue} = state;

    console.log(state)

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                color='Red'/>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                color='Green'/>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color='Blue'/>
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
}

const ButtonsGroup = ({name}) => {
    return <View>
        <Button title='More ${name}'/>
        <Button title='Less {name}'/>
    </View>
}

const style = StyleSheet.create({});

export default SquareScreen
