import React, { useState } from "react";
import { 
    Text, 
    View,
    TouchableOpacity,
    StyleSheet
} 
from 'react-native';

export const RandomNumber = () => {

    const [random, setRandom] = useState(0);

    const handleNumber = () => {
        let n = Math.floor(Math.random() * 10);
        setRandom(n);
    };

    return(
        <View>
            <Text style={styled.number}> {random} </Text>

            <TouchableOpacity style={styled.button} onPress={handleNumber}> 
                <Text> Gerar Número: </Text>
            </TouchableOpacity>
        </View>
    );
}

const styled = StyleSheet.create({
     number: {
        fontSize: 30,
        color: '#006600',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: '70%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    }
});