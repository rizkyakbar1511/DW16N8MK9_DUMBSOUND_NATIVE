import React from "react";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Banner = (props) => {
  console.disableYellowBox = true;
  let banners = [
    {
      img: require("../../assets/jumbotron-bg.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.banner} key={index}>
              <ImageBackground source={item.img} style={styles.bannerImage}>
                <Text style={styles.upperText}>Connect On Dumbsound</Text>
                <Text style={styles.downText}>
                  Discover, Stream, and share a constantly expanding mix of
                  music
                </Text>
                <Text style={styles.downText}>
                  From emerging and major artist around the world
                </Text>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 250,
    backgroundColor: "#fff",
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    margin: 10,
    marginLeft: 15,
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
  },

  upperText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 7,
  },
  downText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});

export default Banner;
