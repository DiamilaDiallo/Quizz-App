import React  from 'react';
import { useState, useEffect } from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState();
    const [quest, setQuest] = useState(0);

    const getQuiz = async() => {
        const uri = 'https://opentdb.com/api.php?amount=10&type=multiple'
        const response = await fetch(uri)
        const data = await response.json()
        setQuestions(data.results)
    };
    useEffect(() => {
        getQuiz()
    }, []);
    return (
        <View style={styles.container}>
        {questions&&
        <View style={styles.parent}>
        <View style={styles.textPref}>
            <Text style={styles.title}>Quizzzzzzzzz Pour toi?</Text>
        </View>
        <View style={styles.quiz}>
            <TouchableOpacity style={styles.optionsB}>
                <Text style={styles.option}>Je n'ai jamais eu d'heures de colle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsB}>
                <Text style={styles.option}>Je n'ai jamais eu d'heures de colle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsB}>
                <Text style={styles.option}>Je n'ai jamais eu d'heures de colle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsB}>
                <Text style={styles.option}>Je n'ai jamais eu d'heures de colle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsB}>
                <Text style={styles.option}>Je n'ai jamais eu d'heures de colle</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
        </View>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: '100%'
    },
    textPref: {
        marginVertical: 17,
    },
    quiz: {
        marginVertical: 17,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#E84855',
        padding:12,
        paddingHorizontal: 16,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    },
    title:{
        fontSize: 28,
        fontWeight:'bold',
        textAlign:'center'
    },
    optionsB:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: 'black',
        paddingHorizontal: 12,
        borderRadius: 30,

    },
    option:{
        fontSize: 18,
        fontWeight:'500',
        color: 'white'
    },
    parent:{
        height: '100%'
    }
   
})

export default Quiz;
