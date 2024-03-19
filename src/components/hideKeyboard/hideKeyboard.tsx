import React, {ReactNode} from 'react';
import {Keyboard, TouchableWithoutFeedback} from "react-native";

export const HideKeyboard = ({children}:{children:ReactNode}) => {
    return (
       <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
           {children}
       </TouchableWithoutFeedback>
    );
};

