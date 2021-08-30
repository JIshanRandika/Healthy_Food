import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button,TouchableOpacity,Dimensions, SafeAreaView, FlatList, StyleSheet,ImageBackground} from 'react-native';

const {height} = Dimensions.get('window');

// const footer = (props) =>(
//
// );


function Footer(props) {

    const { Check, Request, Home, Contact, Organizations,navigation } = props;
    // const Icon = icon;

    return (

        <View style={{
            marginTop: 0,
            flex:0.5,
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems:'center',
            width: "100%",
            // height: 100,
            backgroundColor: "#fffdfe",
            // borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,

        }} >
            <View style={{flex:1}}>
                <View
                    style={{

                    alignSelf: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor:Request==Check ? "#79f7ff": "#ffffff",
                    borderRadius:100,
                    shadowColor: "#0090ff",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }}
                >

                    <TouchableOpacity style={{alignSelf: 'center'}}
                                      // onPress={
                        // if(true){()=> navigation.push({Request})}}

                                      onPress={() => {
                                          Request == Check ? "1" : navigation.push('Requests');
                                      }}

                    >
                        <Image style={{alignSelf: 'center', width:22,height:22, marginTop:"23%"}} source={require('../assets/images/invite.png')} />
                    </TouchableOpacity>

                </View>
            </View>


            <View style={{flex:1}}>
                <View
                    style={{
                    alignSelf: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: Home==Check ? "#79f7ff": "#ffffff",
                    borderRadius:100,
                    shadowColor: "#0090ff",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }}
                >

                    <TouchableOpacity style={{alignSelf: 'center'}}
                                      // onPress={()=> navigation.push({Home})}
                                      onPress={() => {
                                          Home == Check ? "1" : navigation.push('Avatar');
                                      }}
                    >
                        <Image style={{alignSelf: 'center', width:22,height:22, marginTop:"23%"}} source={require('../assets/images/home.png')} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{flex:1}}>
                <View style={{
                    // marginTop:"500%",
                    // marginLeft:"3%",
                    // marginBottom:"13%",
                    // flexDirection: 'column',
                    alignSelf: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: Contact==Check ? "#79f7ff": "#ffffff",
                    borderRadius:100,
                    shadowColor: "#0090ff",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }} >

                    <TouchableOpacity style={{alignSelf: 'center'}}
                                      // onPress={()=> navigation.push({Contact})}
                                      onPress={() => {
                                          Contact == Check ? "Home" : navigation.push('CoOr',
                                              {
                                                  whichtab: true
                                              }
                                              );
                                      }}
                    >
                        <Image style={{alignSelf: 'center', width:22,height:22, marginTop:"23%"}} source={require('../assets/images/contact.png')} />
                    </TouchableOpacity>

                </View>
            </View>


            <View style={{flex:1}}>
                <View style={{
                    // marginTop:"500%",
                    // marginLeft:"3%",
                    // marginBottom:"13%",
                    // flexDirection: 'column',
                    alignSelf: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: Organizations==Check ? "#79f7ff": "#ffffff",
                    borderRadius:100,
                    shadowColor: "#0090ff",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }} >

                    <TouchableOpacity style={{alignSelf: 'center'}}
                                      // onPress={()=> navigation.push({Organizations})}
                                      onPress={() => {
                                          Organizations == Check ? "Home" : navigation.push('CoOr',
                                              {
                                                  whichtab: false
                                              });
                                      }}
                    >
                        <Image style={{alignSelf: 'center', width:22,height:22, marginTop:"23%"}} source={require('../assets/images/plus.png')} />
                    </TouchableOpacity>

                </View>
            </View>



        </View>
    );
}



export default Footer;