import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Matches from "./Matches";
import Notifications from "./Notifications";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Inbox = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#8a1b53",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "lightgrey",
          },
          tabBarStyle: {
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
          },
        }}
      >
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inbox;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   MatchTittle: {
//     fontSize: 14,
//     fontWeight: 700,
//     color: "#8a1b53",
//   },
//   TwoSideCont: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   twoMatches: { flex: 0.5 },
//   twoNotifications: { flex: 0.5 },
//   Box: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//     marginVertical: 10,
//     marginVertical: 10,
//     position: "relative",
//   },
//   Box1: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: 0.5,
//     // backgroundColor: "#B67FB9",
//     backgroundColor: "#666666",
//   },
//   Box2: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     justifyContent: "center",
//     opacity: 0.45,
//     alignItems: "center",
//     backgroundColor: "#807180fc",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     elevation: 2,
//     transform: [{ translateX: 2 }, { translateY: -4 }, { rotate: "5deg" }],
//   },
//   BoxText: {
//     position: "absolute",
//     textAlign: "center",
//     zIndex: 1,
//     color: "#fff",
//   },
//   BoxLove: {
//     position: "absolute",
//     bottom: 8,
//     right: 8,
//     zIndex: 1,
//   },
//   circle: {
//     width: 70,
//     height: 70,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//     marginVertical: 10,
//     overflow: "hidden",
//   },

//   userQueue: {
//     resizeMode: "contain",
//     width: "100%",
//   },

//   matches: {
//     marginTop: 5,
//     // paddingVertical: 10,
//   },
//   MainMatch: {
//     marginVertical: 10,
//     borderBottomWidth: 0.2,
//     borderBottomColor: "grey",
//     paddingVertical: 5,
//     // paddingLeft: 10,
//   },
//   conversation: {},
//   convHeading: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   convTittle: {
//     fontSize: 14,
//     fontWeight: 700,
//     color: "#8a1b53",
//   },
//   cate: {
//     fontSize: 12,
//     fontWeight: 600,
//     color: "#8a1b53",
//   },
//   msgs: {
//     marginVertical: 10,
//   },
//   card: {
//     flexDirection: "row",
//     flex: 1,
//     paddingVertical: 15,

//     borderBottomWidth: 0.2,
//     borderBottomColor: "grey",
//   },
//   circleMsgs: {
//     width: 55,
//     height: 55,
//     borderRadius: 100,
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   ProfileImg: {
//     resizeMode: "contain",
//     width: "100%",
//   },
//   userMsg: {
//     flex: 1,
//     paddingHorizontal: 10,

//     width: "100%",
//   },
//   YourTurn: {
//     backgroundColor: "#5e4a70",
//     borderRadius: 40,
//     paddingHorizontal: 6,
//     paddingVertical: 1,
//   },
//   name: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });
