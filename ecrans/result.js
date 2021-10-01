import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Result = ({navigation}) => {
    return (
        <View>
             <View style={styles.imageContainer}>
                <Image 
                source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/man-making-a-helpless-gesture-check-lists-with-unfulfilled-tasks-3727304-3157818.png'}}
                    style={styles.image} resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text>Home</Text>
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
        alignItems: 'center'   
    },
})

export default Result;
