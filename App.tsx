import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import ExpoCheckbox from "expo-checkbox";
import {HideKeyboard} from "./src/components/hideKeyboard/hideKeyboard";

export default function App() {

    const [input, setInput] = useState('')

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: false},
        {id: 5, title: 'React native', isDone: true},
    ])

    const AddTask=()=>{
        const newTask={id: tasks.length+1, title: input, isDone: false}
        // Alert.alert(JSON.stringify(newTask))
        setTasks([...tasks,newTask])
        setInput('')
    }




    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[ {width: '80%', alignItems: "center", paddingVertical: 20}]}>
                    <TextInput style={styles.input} value={input} onChangeText={setInput}></TextInput>
                </View>
            </HideKeyboard>
            <View  style={[globalStyles.border, {width: '40%',}]}>
                <Button title={'Add task'} onPress={AddTask}/>
            </View>
            <View style={{width: '60%'}}>
                {tasks.map(t => {
                    const ChangeIsDone=()=>{
                        const id=t.id
                        setTasks( tasks.map((t)=>t.id===id?{...t,isDone:!t.isDone}:t))

                    }
                    return <View key={t.id} style={[styles.boxTask, globalStyles.border]}>
                        <ExpoCheckbox value={t.isDone} onValueChange={ChangeIsDone}></ExpoCheckbox>
                        <Text>{t.title}</Text>
                    </View>
                })}
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232946',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fffffe',
        width: '80%',
        height: 40,
        //marginBottom: 12,
        borderWidth: 1,
        padding: 4,
        borderColor: '#f25f4c'
    },
    boxTask: {
        backgroundColor: '#f9bc60',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,

    }
});

const globalStyles = StyleSheet.create({
    border: {
        borderColor: '#e53170',
        borderWidth: 1,
    }
})