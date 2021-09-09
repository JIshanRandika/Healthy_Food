import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button,Dimensions,KeyboardAvoidingView} from 'react-native';
import "./OCR";
import * as Progress from 'react-native-progress';
function Results() {
    // const IngredientData = global.IngredientData;
    // console.log("")
    // console.log("")
    // console.log(IngredientData)
    //
    // const IngredientList = IngredientData.map(Ingredient => {
    //
    //     return <tr key={Ingredient._id}>
    //         <td style={{whiteSpace: 'nowrap'}}>{Ingredient.status}</td>
    //         <td>{Ingredient.ingredientName}</td>
    //
    //     </tr>
    // });
}


let printStatus = 'Healthy';
let countAll=0;
let countUnhealthy=0;
let avg=0;
let color='rgba(0, 255, 17)'

     const Stocks = () => {
         let IngredientDat = global.IngredientData;
        return (
            <>
                <View>
                    {IngredientDat.map((data, key) => {
                        countAll++;
                        if (data.status=='Unhealthy'){
                            countUnhealthy++;
                            console.log(data.status)
                            printStatus = 'Unhealthy'
                        }
                        avg=countUnhealthy/countAll
                        if(countUnhealthy>(countAll/2)){
                            color='rgba(255, 0, 98)'
                        }

                        return (


                            <View key={key}><Text>
                                {data.ingredientName +
                                " , " +
                                data.status }
                            </Text>
                            </View>

                        );
                    })}
                    <Text>{printStatus}</Text>
                    <Progress.Pie progress={avg} size={50} showsText={true} duration={100} color={color}/>
                    {/*<Progress.Circle size={30} indeterminate={true}  showsText={true} duration={100}/>*/}
                </View>
            </>
        );
    };

    // return (
    //     <View>
    //         <Text>Details Screen</Text>
    //         <Text>{IngredientData._id}</Text>
    //         <Text>{IngredientData.status}</Text>


            {/*<table className="mt-4">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th width="20%">Firstname</th>*/}
            {/*        <th width="20%">Lastname</th>*/}

            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {IngredientList}*/}
            {/*    </tbody>*/}
            {/*</table>*/}

            {/*<Text>{global.IngredientData.status}</Text>*/}
            {/*<Button title="Go back" onPress={() => navigation.goBack()} />*/}

    {/*    </View>*/}
    {/*);*/}
// }

export default Stocks;
