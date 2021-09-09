import React, { useState } from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Progress from 'react-native-progress';
import './OCR'

let printStatus = 'Healthy';
let countAll=0;
let countUnhealthy=0;
let countHealthy=0;
let countUnknown=0;
let avg=0;
let color='rgb(16,126,125)'
let avgnum=0;

// myFunction(global.IngredientData)
// var IngredientD = global.IngredientData;
//
//
// global.IngredientData.forEach(obj => {
//     Object.entries(obj).forEach(([key, value]) => {
//         console.log(`${key} ${value}`);
//     });
//     console.log('-------------------');
// });

// IngredientDat.forEach(myFunction);


// function myFunction(IngredientDat) {
//     console.log(IngredientDat)
//     // IngredientDat.map((data, key) => {
//         countAll++;
//         if (IngredientDat.status=='Unknown'){
//             countUnknown++;
//             // console.log(data.status)
//             // printStatus = 'Unhealthy'
//         }
//         if (IngredientDat.status=='Healthy'){
//             countHealthy++;
//             // console.log(data.status)
//             // printStatus = 'Unhealthy'
//         }
//         if (IngredientDat.status=='Unhealthy'){
//             countUnhealthy++;
//             // console.log(data.status)
//             // printStatus = 'Unhealthy'
//         }
//         avg=countUnhealthy/(countAll-countUnknown)
//         if(avg>0.5){
//             color='rgb(213,87,59)'
//             printStatus = 'Unhealthy'
//         }
//         avgnum=Math.round(avg*100);
//
//     // })
// }

// function DetailsScreen({ route, navigation }) {
//     /* 2. Get the param */
//     const { dataset } = route.params;
//     console.log("as")
//     console.log(dataset)
//
// }
// DetailsScreen()
let IngredientData = IngredientData;

// console.log(IngredientD)

{IngredientData.map((data, key) => {
    countAll++;
    if (data.status=='Unknown'){
        countUnknown++;
        // console.log(data.status)
        // printStatus = 'Unhealthy'
    }
    if (data.status=='Healthy'){
        countHealthy++;
        // console.log(data.status)
        // printStatus = 'Unhealthy'
    }
    if (data.status=='Unhealthy'){
        countUnhealthy++;
        // console.log(data.status)
        // printStatus = 'Unhealthy'
    }
    avg=countUnhealthy/(countAll-countUnknown)
    if(avg>0.5){
        color='rgb(213,87,59)'
        printStatus = 'Unhealthy'
    }
    avgnum=Math.round(avg*100);

})}


let boxcolor="#5b1414"

const Item = ({ item, onPress, backgroundColor, textColor }) => (

    <TouchableOpacity onPress={onPress}
                      style={{
                          // flex: 1,
                          marginTop:"3%",
                          alignSelf: 'center',
                          width: "47%",
                          height: 37,
                          backgroundColor: item.status ==="Healthy"? "#107e7d" : item.status ==="Unhealthy"? "#d5573b" : "#e3b505",
                          borderRadius:10,
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
        <Text style={{fontSize: 20, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>{item.ingredientName} is {item.status}</Text>


    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item._id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (

        <SafeAreaView>
            <View style={{alignItems:"center", marginTop:20, marginBottom:10}}>
                <Text style={{fontSize:30,fontWeight:"bold",color:{printStatus} ==="Healthy"? "#107e7d" :"#d5573b"}}>{printStatus}</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Progress.Pie progress={avg} size={100} showsText={true} duration={100} color={color}/>
            </View>
            <View style={{alignItems:"center", marginTop:10, marginBottom:10}}>
                <Text style={{fontSize:10,fontWeight:"bold",alignItems:"center"}}>{avgnum}% Unhealthy</Text>
            </View>
            <FlatList
                style={{height:"70%"}}
                data={IngredientData}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                extraData={selectedId}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:50,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    status: {
        fontSize: 20,
        fontWeight:"bold",
        textAlign:"center"
    },
});

export default App;
