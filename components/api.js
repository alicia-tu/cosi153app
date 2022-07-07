import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const CourseDemo = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [temporaryInput, setTemporaryInput] = useState('');

    const [subject, setSubject] = useState('');

    const getRepos = async () => {
        try {
            const response = await fetch('https://damp-springs-29329.herokuapp.com/data/courses20-21.json');
            const json = await response.json();
            setData(json.filter((x) => (x['subject']== subject)));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getRepos() }, [subject])

    return (

        <View style={{ flex: 1, padding: 24 }}>

            <TextInput
                placeholder="Enter subject (abbreviated)"
                onChangeText={newText => setTemporaryInput(newText)}
                defaultValue={temporaryInput}
            />

            <Button
                title="Submit"
                onPress={() => {
                    setSubject(temporaryInput)
                }}
            />

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data.slice(0,1)}
                    keyExtractor={({ coursenum }, index) => coursenum}
                    renderItem={({ item }) => (
                        <View style = {{flexDirection: "row",
                                        padding: 15,
                                        margin: 5,}}>
                         <Text>{item.name}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

export default CourseDemo