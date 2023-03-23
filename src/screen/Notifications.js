import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.conversation}>
        <View style={styles.convHeading}>
          <View>
            <Text>
              {" "}
              <Text style={styles.convTittle}>Notifications</Text>
              <Text> (06)</Text>
            </Text>
          </View>
          <View style={styles.sort}>
            <MaterialCommunityIcons name="sort" size={24} color="#8a1b53" />
          </View>
        </View>

        <View style={styles.msgs}>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={styles.ProfileImg}
                source={require("../../assets/userprofile.jpeg")}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>
                  Emma{" "}
                  <Image
                    style={[
                      styles.userQueue,
                      {
                        width: 19,
                        height: 19,
                        resizeMode: "cover",
                      },
                    ]}
                    source={{
                      uri: "https://img.icons8.com/fluency/48/null/verified-badge.png",
                    }}
                  />
                </Text>

                <View style={styles.YourTurn}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Your Turn</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={[
                  styles.userQueue,
                  {
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  },
                ]}
                source={{
                  uri: "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>Tom</Text>
                <View style={styles.YourTurn}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Your Turn</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={[
                  styles.userQueue,
                  {
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  },
                ]}
                source={{
                  uri: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2023/02/Fb-Profile-Pics-Wallpaper-for-Girls.jpg",
                }}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>Caroline</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={[
                  styles.userQueue,
                  {
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  },
                ]}
                source={{
                  uri: "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>
                  Harry{" "}
                  <Image
                    style={[
                      styles.userQueue,
                      {
                        width: 19,
                        height: 19,
                        resizeMode: "cover",
                      },
                    ]}
                    source={{
                      uri: "https://img.icons8.com/fluency/48/null/verified-badge.png",
                    }}
                  />
                </Text>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={[
                  styles.userQueue,
                  {
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  },
                ]}
                source={{
                  uri: "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>Emma</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.circleMsgs}>
              <Image
                style={styles.ProfileImg}
                source={require("../../assets/userprofile.jpeg")}
              />
            </View>
            <View style={styles.userMsg}>
              <View style={styles.name}>
                <Text style={styles.convTittle}>Emma</Text>
              </View>
              <View>
                <Text style={{ fontWeight: 300, marginVertical: 2 }}>
                  Lorem ipsum dolor sit amet, consecte.
                </Text>
                <Text style={styles.cate}>Networking</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 10,
    overflow: "hidden",
  },

  userQueue: {
    resizeMode: "contain",
    width: "100%",
  },

  conversation: {},
  convHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  convTittle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#8a1b53",
  },
  cate: {
    fontSize: 12,
    fontWeight: 600,
    color: "#8a1b53",
  },
  msgs: {
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  circleMsgs: {
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: "center",
    overflow: "hidden",
  },
  ProfileImg: {
    resizeMode: "contain",
    width: "100%",
  },
  userMsg: {
    flex: 1,
    // height: 150,
    paddingHorizontal: 10,
    width: "100%",

    // borderWidth: 2,
  },
  YourTurn: {
    backgroundColor: "#5e4a70",
    borderRadius: 40,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
