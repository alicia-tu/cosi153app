import React from 'react';
import {Alert, View, Text, Linking, Button} from 'react-native';

const supoortedURL = 'https://www.brandeis.edu/hiatt/outcomes/major-industry.html';

const openURLButton = ({url,children}) =>{
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

const Career = ()=>{
    return (
        <View>
            <Text> Information of career for each major on Hiatt </Text>
            <openURLButton url= {supoortedURL}> Open Link to Hiatt Career Center
            </openURLButton>
        </View>
    )
}

export default Career;

