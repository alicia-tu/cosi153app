import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import picture from './alicia.jpg';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "powderblue",
  },
  logo: {
    width: 300,
    height: 300,
  },
  image:{
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 100,
  },
  text:{
    fontSize: 40,
    textAlign: "center",
  }
});

const DisplayAnImage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style = {styles.title}>About the developer </Text>
      <Text style = {styles.text}>Alicia Tu</Text>
      <View style = {styles.image}>
      <Image
        style={styles.logo}
        source={picture}
      />
      </View>
      <Text style = {styles.text}>I am a rising senior majoring in Computer Science, Linguistics, and Classical Studies</Text>
      <Text style = {[styles.text, {fontWeight:"bold"}]}> {'\n'} App Description:</Text>
      <Text style = {styles.text}>I want to help people to know about more subjects and encourage them to explore more in other projects
      I want to make an app that display the most common majors in college, and give out information on major description, as well as possible future career.</Text>
    </ScrollView>
  );
}

export default DisplayAnImage;
