import React, {useState} from 'react';
import {TextInput, StyleSheet, Button, View} from "react-native";
import {globalStyles} from "../../globalStyles/globalStyles";

type Props = {
    title: string,
    id: number,
    setInput: (id: number, title: string) => void,
    setShow: (id: number) => void
}

export const TitleInput = (props: Props) => {
    const {title, setInput, id, setShow} = props

    const [value, setValue] = useState(title)

    return (
        <View style={{flexDirection: 'row'}}>
            <TextInput style={[styles.input, globalStyles.border]} value={value} onChangeText={setValue}></TextInput>
            <Button title={'+'} onPress={() => {
                setInput(id, value)
                setShow(0)
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fffffe',
        width: '80%',
        height: 40,
        //marginBottom: 12,
        borderWidth: 1,
        padding: 4,
        borderColor: '#f25f4c'
    }
})