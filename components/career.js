import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://www.brandeis.edu/hiatt/outcomes/major-industry.html";

const supportedURL2= "https://www.brandeis.edu/hiatt/outcomes/industry-employment.html"

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Career = () => {
  return (
    <View style= {{flex: 1, justifyContent: "center", alignItems: "center",  backgroundColor: "powderblue", padding: 15,}}>
      <OpenURLButton url={supportedURL}>See Major to Industry</OpenURLButton>
      <OpenURLButton url={supportedURL2}> See Employment to Industry</OpenURLButton>
    </View>
  );
};



export default Career;