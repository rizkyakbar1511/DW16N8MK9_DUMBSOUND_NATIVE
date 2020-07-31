import React from "react";
import Banner from "../components/Banner";
import Music from "../components/Music";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dumb<Text style={styles.title2}>sound</Text>
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Icon
          name="arrow-left-bold-box-outline"
          color="#EE4622"
          style={{ marginRight: 10 }}
          size={30}
        />
      </TouchableOpacity>
      <ScrollView>
        <Banner />
        <Text style={[styles.titleSongs, { marginTop: 0 }]}>Music</Text>
        <Music />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1d1d",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EE4622",
    margin: 10,
    marginLeft: 15,
    textAlign: "center",
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff",
    margin: 10,
    marginLeft: 15,
    textAlign: "center",
  },
  titleSongs: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EE4622",
    margin: 10,
    marginLeft: 15,
  },
});

export default Home;
