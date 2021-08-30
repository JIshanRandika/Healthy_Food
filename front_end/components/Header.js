import React from 'react';
import { TouchableOpacity , StyleSheet , Text , Dimensions,ImageBackground,Image,View } from 'react-native';
import Menu, {MenuItem} from "react-native-material-menu";

const {height} = Dimensions.get('window');

// const header = () =>(
//     <View style={{flex:0.8,flexDirection: 'row', width:Dimensions.get('window').width,height:"100%"}}>
//
//         <ImageBackground style={{width:"100%",height:"100%"}} source={require('../assets/images/header.png')}>
//             <View style={{flex:6,flexDirection: 'row', marginTop:"3%"}}>
//                 <View style={{ marginLeft:"8%", marginTop:"1%"}}>
//                     <TouchableOpacity  onPress={()=> this.props.navigation.goBack()}>
//                         <Image source={require('../assets/images/backButton.png')} />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{marginLeft:"5%"}}>
//                     <TouchableOpacity  onPress={()=> this.props.navigation.push('Profile')}>
//                         <Image source={require('../assets/images/avatar.png')} />
//                     </TouchableOpacity>
//                 </View>
//                 <View>
//                     <TouchableOpacity style={{marginLeft:10}} onPress={()=> this.props.navigation.push('Profile')}>
//                         <Text style={{textAlign: 'center',color:'#ffffff',fontWeight: "bold", fontSize:20}}>
//                             My Avatar
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ImageBackground>
//
//     </View>
// );
//
//
//
// export default header;


// class header extends React.Component {
//     static navigationOptions = {
//         headerShown: false
//
//     };
//
//     render() {
//
//         return (
//
//         );
//     }
// }




function Header(props) {

    const { content,navigation} = props;
    // const Icon = icon;
    return (

        <View style={{flex:0.8,flexDirection: 'row', width:Dimensions.get('window').width,height:"100%"}}>

            <ImageBackground style={{width:"100%",height:Dimensions.get('window').width/6.3}} source={require('../assets/images/header.png')}>
                <View style={{flex:6,flexDirection: 'row', marginTop:"3%"}}>

                    {content!=='Home' &&(
                        <View style={{ marginLeft:"8%", marginTop:"1%"}}>
                        <TouchableOpacity  onPress={()=> navigation.goBack()}>
                            <Image style={{width:24, height:24}} source={require('../assets/images/backButton.png')} />
                        </TouchableOpacity>
                    </View>
                    )

                    }

                    {/*<View style={{ marginLeft:"8%", marginTop:"1%"}}>*/}
                        {/*<TouchableOpacity  onPress={()=> navigation.goBack()}>*/}
                            {/*<Image style={{width:24, height:24}} source={require('../assets/images/backButton.png')} />*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}

                    <View style={{marginLeft:"5%"}}>
                        <TouchableOpacity  onPress={()=> navigation.push('Profile')}>
                            <Image style={{width:35, height:35}} source={require('../assets/images/avatar.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginLeft:10}} onPress={()=> this.props.navigation.push('Profile')}>
                            <Text style={{textAlign: 'center',color:'#ffffff',fontWeight: "bold", fontSize:20}}>
                                {content}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {content==='Chat' &&(
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft:"93%",marginBottom:"15%"}}>
                        <Menu
                            ref={this.setMenuRef}
                            button={<Text onPress={this.showMenu}>
                                <TouchableOpacity style={{marginTop:-35, marginLeft:10}} onPress={()=> this._menu.show()}>
                                    <Image style={{width:30, height:20}} source={require('../assets/images/dotmenu.png')} />
                                </TouchableOpacity>
                            </Text>

                            }
                        >

                            <MenuItem style={{}} onPress={this.hideMenu}>
                                <Text
                                    onPress={()=> {
                                        this.props.navigation.push('Backgrounds');
                                    }
                                    }
                                    style={{textAlign: 'center',color:'#0090ff',fontWeight: "bold", marginTop:3}}>
                                    Change Background
                                </Text></MenuItem>

                        </Menu>
                    </View>
                )}

            </ImageBackground>

        </View>
    );
}




export default Header;