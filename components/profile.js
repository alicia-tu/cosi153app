import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueContext'; // to use/change shared values

const Async1 = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState(currentValue.name);
    const [email, setEmail] = useState(currentValue.email);
    const [major,setMajor] = useState(currentValue.major);
    
    useEffect(()=> {
        setName(currentValue.name);
        setEmail(currentValue.email);
        setMajor(currentValue.major);
         },
        [currentValue]);

    return ( 
        <View style={{justifyContent:'space-between',flex:1}}>
            <Text style= {{padding: 15, textAlign: 'center'}}> currentValue = {JSON.stringify(currentValue)} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>name</Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setName(text)} 
                    value={name}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>email</Text>
                <TextInput
                    style={{backgroundColor:'lightblue'}}
                    onChangeText = {(text)=>setEmail(text)} 
                    value={email}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>major</Text>
                <TextInput
                    style={{backgroundColor:'pink'}}
                    onChangeText = {(text)=>setMajor(text)} 
                    value={major}
                />
            </View>
            
            <Button 
               title="save Profile"
               onPress = {() => 
                    setCurrentValue({name,email, major})
                }
               />
            
            
        </View>
    )
}
export default Async1;