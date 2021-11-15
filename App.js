import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/components_screen/ComponentsScreen";
import ListScreen from "./src/screens/flatlist/ListScreen";
import ListExercise from "./src/screens/flatlist/ListExercise";
import ExcerciseOne from "./src/screens/components_screen/ExerciseOne";
import ImageScreen from "./src/screens/reusable_components/ImageScreen"
import CounterScreen from "./src/screens/counter/CounterScreen"

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        ComponentsScreen: ComponentsScreen,
        ExerciseOne: ExcerciseOne,
        List: ListScreen,
        ListExercise: ListExercise,
        ImageScreen: ImageScreen,
        CounterScreen: CounterScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
