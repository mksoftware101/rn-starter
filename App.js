import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/components_screen/ComponentsScreen";
import ListScreen from "./src/screens/flatlist/ListScreen";
import ListExercise from "./src/screens/flatlist/ListExercise";
import ExcerciseOne from "./src/screens/components_screen/ExerciseOne";
import ImageScreen from "./src/screens/reusable_components/ImageScreen"
<<<<<<< Updated upstream
=======
import CounterScreen from "./src/screens/counter/CounterScreen"
import ColorScreen from "./src/screens/colors/ColorScreen"
import SquareScreen from "./src/screens/colors/SquareScreen"
import CounterWithReducer from "./src/screens/counter/CounterWithReducer"
>>>>>>> Stashed changes

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        ComponentsScreen: ComponentsScreen,
        ExerciseOne: ExcerciseOne,
        List: ListScreen,
        ListExercise: ListExercise,
        ImageScreen: ImageScreen,
<<<<<<< Updated upstream
=======
        CounterScreen: CounterScreen,
        ColorScreen: ColorScreen,
        SquareScreen: SquareScreen,
        CounterWithReducer: CounterWithReducer,
>>>>>>> Stashed changes
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
