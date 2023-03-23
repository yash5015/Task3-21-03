import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/Home";
import Calendar from "./screen/Calendar";
import Inbox from "./screen/Inbox";
import Profile from "./screen/Profile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerTitle: () => {
              return (
                <FontAwesome5
                  name="canadian-maple-leaf"
                  size={24}
                  color="#a91c5c"
                />
              );
            },
            headerStyle: { backgroundColor: "#fff" },
            headerLeft: () => {
              return <Ionicons name="map-outline" size={24} color="#a91c5c" />;
            },
            headerTitleAlign: "center",
            headerTintColor: "#a91c5c",
            headerRight: () => {
              return <FontAwesome name="sliders" size={24} color="#a91c5c" />;
            },
            headerLeftContainerStyle: {
              paddingHorizontal: 10,
            },
            headerRightContainerStyle: {
              paddingHorizontal: 10,
            },
            headerTitleStyle: { fontWeight: "bold", alignItems: "center" },
            tabBarActiveTintColor: "#a91c5c",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused, color, size }) => {
              return !focused ? (
                <Ionicons name="md-home-outline" size={24} color="#a91c5c" />
              ) : (
                <Ionicons name="home-sharp" size={24} color="#a91c5c" />
              );
            },
          })}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={() => ({
            tabBarIcon: ({ focused }) => {
              return !focused ? (
                <Ionicons
                  name="md-calendar-outline"
                  size={24}
                  color="#a91c5c"
                />
              ) : (
                <Ionicons name="md-calendar" size={24} color="#a91c5c" />
              );
            },
            tabBarActiveTintColor: "#a91c5c",
          })}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={() => ({
            tabBarActiveTintColor: "#a91c5c",
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="md-chatbubbles" size={24} color="#a91c5c" />
              ) : (
                <Ionicons
                  name="md-chatbubbles-outline"
                  size={24}
                  color="#a91c5c"
                />
              );
            },
            headerRightContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRight: () => {
              return (
                <Ionicons name="md-search-outline" size={24} color="#a91c5c" />
              );
            },
            headerTintColor: "#a91c5c",
            headerTitleStyle: { fontWeight: 600, fontSize: 29 },
          })}
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
