import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizz</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 28,
        fontWeight:'bold'
    },
    container: {
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default Title;
