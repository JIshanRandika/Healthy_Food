// import React from 'react';
// import {
//     View, Text, Image, ScrollView, TextInput, Button, Dimensions, KeyboardAvoidingView,
//     SafeAreaView,
//     FlatList, TouchableOpacity,
// } from 'react-native';
// import "./OCR";
// import * as Progress from 'react-native-progress';
// function Results() {
//     // const IngredientData = global.IngredientData;
//     // console.log("")
//     // console.log("")
//     // console.log(IngredientData)
//     //
//     // const IngredientList = IngredientData.map(Ingredient => {
//     //
//     //     return <tr key={Ingredient._id}>
//     //         <td style={{whiteSpace: 'nowrap'}}>{Ingredient.status}</td>
//     //         <td>{Ingredient.ingredientName}</td>
//     //
//     //     </tr>
//     // });
// }
//
//
// let printStatus = 'Healthy';
// let countAll=0;
// let countUnhealthy=0;
// let avg=0;
// let color='rgba(0, 255, 17)'
//
//      const Stocks = () => {
//          var IngredientDat = global.IngredientData;
//         return (
//             <>
//                 {/*=================================*/}
//                 <View>
//                     {IngredientDat.map((data, key) => {
//                         countAll++;
//                         if (data.status=='Unhealthy'){
//                             countUnhealthy++;
//                             console.log(data.status)
//                             printStatus = 'Unhealthy'
//                         }
//                         avg=countUnhealthy/countAll
//                         if(countUnhealthy>(countAll/2)){
//                             color='rgba(255, 0, 98)'
//                         }
//
//                         return (
//                             <View key={key} >
//
//
//
//                                 <Text>
//                                 {data.ingredientName +
//                                 " is " +
//                                 data.status }
//                             </Text>
//                             </View>
//
//                         );
//                     })}
//                     <Text>{printStatus}</Text>
//                     <Progress.Pie progress={avg} size={50} showsText={true} duration={100} color={color}/>
//                 </View>
//             </>
//         );
//     };
// const ResultsView = () => {
//     return (
//         <View>
//             {Stocks}
//         </View>
//     );
//
// }
//
//
// export default Stocks;
