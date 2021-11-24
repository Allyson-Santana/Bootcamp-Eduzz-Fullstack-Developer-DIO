import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image, 
    Text,
    Alert,
    TouchableOpacity
} from 'react-native';
import Photo from '../../../assets/Image.jpg';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components';

export const MyCV = () => {

    const handleSocialNetwork = (socialNetWork) => {
        switch (socialNetWork) {
            case "github":
                Alert.alert('Github','Meu link do Github');
                break;
            case "linkdin":
                Alert.alert('Linkdin','Meu link do linkdin');
                break;
        
            default:
                Alert.alert('Erros' ,'Opss... Algo deu errado');
                break;
        }
    }

    return(
        <SafeAreaView style={styled.main}>
            <View style={styled.header}>                
                <Image source={Photo} style={styled.photo} />
                <Text style={styled.name}>Allyson Santana</Text>
                <Text style={styled.job}>Desenvolvedor FullStack</Text>

                <View style={styled.socialNetwork}>
                    <TouchableOpacity onPress={ () => handleSocialNetwork('github') }> 
                        <Feather name="github" size={24} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialNetwork('linkdin')}>
                        <Feather name="linkedin" size={24} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>

            <Card title="Experiência Profissional">
                <Text style={styled.cardContentText}>Experiência Profissional 1</Text>
                <Text style={styled.cardContentText}>Experiência Profissional 2</Text>
                <Text style={styled.cardContentText}>Experiência Profissional 3</Text>
            </Card>
            <Card title="Conhecimento Academico">
                <Text style={styled.cardContentText}>Conhecimento Academica 1</Text>
                <Text style={styled.cardContentText}>Conhecimento Academica 2</Text>
                <Text style={styled.cardContentText}>Conhecimento Academica 3</Text>
            </Card>
            
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({
    main: {
        backgroundColor: '#E7F7F7',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 45
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    name: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    job: {
        color: '#939393',
        marginBottom: 10
    },
    socialNetwork: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginTop: 10
    }, 
    cardContentText: {
        color: "#939393",
        marginBottom: 10   
    }
    
});