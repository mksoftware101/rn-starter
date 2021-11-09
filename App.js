import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/components_screen/ComponentsScreen";
import ListScreen from "./src/screens/flatlist/ListScreen";
import ListExercise from "./src/screens/flatlist/ListExercise";
import ExcerciseOne from "./src/screens/components_screen/ExerciseOne";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        ComponentsScreen: ComponentsScreen,
        ExerciseOne: ExcerciseOne,
        List: ListScreen,
        ListExercise: ListExercise,
    },
    {
        initialRouteName: "ComponentsScreen",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
