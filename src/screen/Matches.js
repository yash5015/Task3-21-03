import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Matches = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.MainMatch}>
          <Text>
            <Text style={styles.MatchTittle}> Match Queue </Text>
            <Text>(4)</Text>
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.matches}
          >
            <View style={styles.Box}>
              <Text style={styles.BoxText}>15+</Text>
              <Text style={styles.BoxLove}>
                <FontAwesome5 name="heart" size={13} color="#fff" />
              </Text>
              <Image
                style={[
                  styles.userQueue,
                  {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    // opacity: 0.5,
                    borderRadius: 10,
                  },
                ]}
                source={{
                  uri: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
              <View style={styles.Box1}></View>
              <View style={styles.Box2}></View>
            </View>
            <View style={styles.circle}>
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
                  uri: "https://images.pexels.com/photos/3492736/pexels-photo-3492736.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
            <View style={styles.circle}>
              <Image
                style={styles.userQueue}
                source={require("../../assets/userprofile.jpeg")}
              />
            </View>
            <View style={styles.circle}>
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
            <View style={styles.circle}>
              <Image
                style={styles.userQueue}
                source={require("../../assets/userprofile.jpeg")}
              />
            </View>
            <View style={styles.circle}>
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
                  uri: "https://images.pexels.com/photos/3492736/pexels-photo-3492736.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
            <View style={styles.circle}>
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
                  uri: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.conversation}>
          <View style={styles.convHeading}>
            <View>
              <Text>
                {" "}
                <Text style={styles.convTittle}>Conversations</Text>
                <Text> (Recent)</Text>
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
                    <Text style={{ color: "#fff", fontSize: 12 }}>
                      Your Turn
                    </Text>
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
                    <Text style={{ color: "#fff", fontSize: 12 }}>
                      Your Turn
                    </Text>
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
      </View>
    </ScrollView>
  );
};

export default Matches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    padding: 10,
  },
  MatchTittle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#8a1b53",
  },
  TwoSideCont: {
    flex: 1,
    flexDirection: "row",
  },
  twoMatches: { flex: 0.5 },
  twoNotifications: { flex: 0.5 },
  Box: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 10,
    marginVertical: 10,
    position: "relative",
  },
  Box1: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    // backgroundColor: "#B67FB9",
    backgroundColor: "#666666",
  },
  Box2: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    opacity: 0.45,
    alignItems: "center",
    backgroundColor: "#807180fc",
    position: "absolute",
    top: 0,
    left: 0,
    elevation: 2,
    transform: [{ translateX: 2 }, { translateY: -4 }, { rotate: "5deg" }],
  },
  BoxText: {
    position: "absolute",
    textAlign: "center",
    zIndex: 1,
    color: "#fff",
  },
  BoxLove: {
    position: "absolute",
    bottom: 8,
    right: 8,
    zIndex: 1,
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

  matches: {
    marginTop: 5,
    // paddingVertical: 10,
  },
  MainMatch: {
    marginVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    paddingVertical: 5,
    // paddingLeft: 10,
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
