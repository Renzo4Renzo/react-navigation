import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Feed from "./screens/Feed";
import Notification from "./screens/Notifications";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();
const setScreenOptions = ({ route, navigation }) => ({
  tabBarIcon: ({ color, focused, size }) => {
    let iconName;
    if (route.name === "Feed") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Notifications") {
      iconName = focused ? "notifications" : "notifications-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "settings" : "settings-outline";
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#1DA1F2",
  tabBarInactiveTintColor: "gray",
});

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={setScreenOptions}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notification} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
