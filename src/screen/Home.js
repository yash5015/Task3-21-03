import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const [isGoingIdx, setIsGoingIdx] = useState([]);
  const [isInterestedIdx, setIsInterestedIdx] = useState([]);

  const handlegoing = (id) => {
    let arrgoing = isGoingIdx;
    if (!arrgoing.includes(id)) {
      arrgoing.push(id);
    } else {
      arrgoing.splice(arrgoing.indexOf(id), 1);
    }
    setIsGoingIdx([...arrgoing]);
  };
  const handleinterest = (id) => {
    let arrinterest = isInterestedIdx;
    if (!arrinterest.includes(id)) {
      arrinterest.push(id);
    } else {
      arrinterest.splice(arrinterest.indexOf(id), 1);
    }
    setIsInterestedIdx([...arrinterest]);
  };

  let HomeItems = [
    {
      id: 1,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 2,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 3,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 4,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 5,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 6,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 7,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
    {
      id: 8,
      tittle: "Kenny's Wood Fired Grill",
      image: "../../assets/restaurant.jpeg",
      address: "5000 Belt Linee Td #775, Dallas, TX 75254, United States",
      already: 25,
      going: 10,
      interested: 22,
      date: "SAT,JUL 8",
      arrival: "00:00",
      departure: "23:59",
      timezone: "UTC-05",
    },
  ];

  return (
    <ScrollView>
      <View>
        {HomeItems.map((item) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.topFlex}>
              <View style={styles.top}>
                <View style={styles.cardImg}>
                  <Image
                    style={styles.tinyImage}
                    source={require("../../assets/restaurant.jpeg")}
                  />
                </View>
                <View style={styles.cardDetails}>
                  <View style={styles.time}>
                    <View style={styles.date}>
                      <Text style={styles.timeText}>{item.date}</Text>
                    </View>
                    <View style={styles.datentime}>
                      <Text style={styles.timeText}>{item.arrival}-</Text>
                      <Text style={styles.timeText}>{item.departure} </Text>
                      <Text style={styles.timeText}>{item.timezone}</Text>
                    </View>
                  </View>
                  <View style={styles.cardVenue}>
                    <View style={styles.cardHeading}>
                      <Text style={styles.tittleText}>{item.tittle}</Text>
                    </View>
                    <View>
                      <Text style={styles.addressText}>
                        <Entypo name="location-pin" />
                        {"  "}
                        {item.address}
                      </Text>
                    </View>
                    <View style={styles.status}>
                      <Text style={styles.statusText}>
                        .{item.already} Already here
                      </Text>
                      <Text style={styles.statusText}>.{item.going} going</Text>
                      <Text style={styles.statusText}>
                        .{item.interested} interested
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomFlex}>
              <View style={styles.bottom}>
                <View style={styles.bottomstyle}>
                  <View style={styles.btmstyl}>
                    <Pressable onPress={() => handlegoing(item.id)}>
                      {isGoingIdx.includes(item.id) ? (
                        <Ionicons
                          name="checkmark-circle-sharp"
                          size={22}
                          color="purple"
                        />
                      ) : (
                        <Ionicons
                          name="checkmark-circle-outline"
                          size={22}
                          color="purple"
                        />
                      )}
                    </Pressable>
                    <Text style={styles.bottomText}>Going</Text>
                  </View>

                  <View style={styles.btmstyl}>
                    <Pressable onPress={() => handleinterest(item.id)}>
                      {isInterestedIdx.includes(item.id) ? (
                        <AntDesign name="star" size={22} color="purple" />
                      ) : (
                        <AntDesign name="staro" size={22} color="purple" />
                      )}
                    </Pressable>

                    <Text style={styles.bottomText}>Interested</Text>
                  </View>
                  <View style={styles.btmstyl}>
                    <AntDesign name="sharealt" size={24} color="purple" />
                    <Text style={styles.bottomText}>Share</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    height: 160,
    // width: "100%",
    // alignItems: "center",

    // borderWidth: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
  },
  cardImg: {
    width: 100,
    // height: 100,

    borderRadius: 10,
  },
  tinyImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardDetails: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: "space-around",
    height: "100%",
  },
  cardVenue: {
    flex: 1,
    justifyContent: "space-between",
  },
  topFlex: {
    flex: 2,
  },
  bottomFlex: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "space-around",
  },
  time: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datentime: {
    flexDirection: "row",
  },
  timeText: {
    fontSize: 11,
    fontWeight: 400,
    color: "#8f9298",
  },
  tittleText: {
    fontWeight: 700,
    fontSize: 16,
    color: "purple",
  },
  addressText: {
    fontSize: 13,
    fontWeight: 400,
    color: "grey",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottomstyle: {
    width: 220,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row",

    // borderWidth: 1,
  },
  btmstyl: {
    alignItems: "center",
  },

  status: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusText: {
    fontSize: 11,
    fontWeight: 400,
    color: "grey",
  },
  bottomText: {
    fontSize: 11,
    fontWeight: 300,
    color: "#878484",
    flexDirection: "column",
    alignItems: "center",
  },
});
