import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.imageContainer}>
                <Image 
                source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/man-making-a-helpless-gesture-check-lists-with-unfulfilled-tasks-3727304-3157818.png'}}
                    style={styles.image}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                    <Text  style={styles.buttonText}>JOUER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 400,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1 
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 16,
        height: '100%'
    },
    button: {
        width:'100%',
        backgroundColor: '#E84855',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 35
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }
})

export default Home;
