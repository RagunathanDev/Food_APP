import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShow from "./src/Screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShow,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Buisness search",
    },
  }
);

export default createAppContainer(navigator);
