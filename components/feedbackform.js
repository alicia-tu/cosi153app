import React, {useState} from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import {useValue} from './ValueContext';
import {sendFeedback} from './feedback';
const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <View>
            
            <View style={{flexDirection:'row',justifyContent:'center', flex:1}}>
                <TouchableOpacity
                    title="send feedback"
                    style={{fontSize:30}}
                    onPress = {() => {
                        console.log('sending feedback....');
                        sendFeedback(feedback);
                        setFeedback("")}}
                    >
                    <Text>send feedback</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
               multiline
               numberOfLines={2}
               placeholder="put in your feedback here"
               style={{backgroundColor:'powderblue'}}
               onChangeText = {(text) => setFeedback(text)}
               value={feedback}
            />

        </View>
    )
}

export default Async4;