import React from 'react';
import {
    View,
    Text
} from 'react-native';

export const Card = ({ title, children }) => {
    return(
        <View style={styled.card}>
            <View style={styled.cardHeader} >
                <Text style={{fontWeight: 'bold'}}> { title } </Text>
            </View>

            <View style={styled.cardContent}>
                { children }
            </View>
        </View>
    );
}