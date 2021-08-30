import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button,TouchableOpacity,Dimensions, SafeAreaView, FlatList, StyleSheet,ImageBackground} from 'react-native';

const {height} = Dimensions.get('window');

const backgroundImage = (props) =>(
    <View style={{
        // marginTop:"15%",
        marginLeft:"5%",
        alignSelf: 'center',
        width: "27%",
        height: "90%",
        backgroundColor: "#ffffff",
        borderRadius:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    }}>
        <Image style={{width:"100%",height:"100%"}} source={require('../assets/images/bgpic.jpeg')} />
    </View>
);



export default backgroundImage;