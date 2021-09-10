import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress/Circle';
import TesseractOcr, {
    LANG_ENGLISH,
    useEventListener,
} from 'react-native-tesseract-ocr';



const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
    cropping: true,
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WITH,
};

function OCR({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [imgSrc, setImgSrc] = useState(null);
    const [text, setText] = useState('');


    const [ingredientList, ingredientListSet] = React.useState([]);


    useEventListener('onProgressChange', (p) => {
        setProgress(p.percent / 100);
    });

    const recognizeTextFromImage = async (path) => {
        setIsLoading(true);



        try {
            const tesseractOptions = {};
            const recognizedText = await TesseractOcr.recognize(
                path,
                LANG_ENGLISH,
                tesseractOptions,
            );
            setText(recognizedText);
        } catch (err) {
            console.error(err);
            setText('');
        }


        setIsLoading(false);
        setProgress(0);
    };
    // const tesseractOptions = {

    // };
    const recognizeFromPicker = async (options = defaultPickerOptions) => {
        try {
            const image = await ImagePicker.openPicker(options);
            setImgSrc({uri: image.path});
            await recognizeTextFromImage(image.path);
        } catch (err) {
            if (err.message !== 'User cancelled image selection') {
                console.error(err);
            }
        }
    };

    const recognizeFromCamera = async (options = defaultPickerOptions) => {
        try {
            const image = await ImagePicker.openCamera(options);
            setImgSrc({uri: image.path});
            await recognizeTextFromImage(image.path);
        } catch (err) {
            if (err.message !== 'User cancelled image selection') {
                console.error(err);
            }
        }
    };


    // ==========================================

    // global.IngredientData =[
    //     {
    //         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //         title: "First Item",
    //     },
    //     {
    //         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //         title: "Second Item",
    //     },
    //     {
    //         id: "58694a0f-3da1-471f-bd96-145571e29d72",
    //         title: "Third Item",
    //     },
    // ];

    const checkIngredient = async (ingredientArray) => {
        // fetch('/api/getsome')
        //     .then(response => response.json())

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredientArray: ingredientArray })
        };

        await fetch(`http://192.168.8.100:8080/api/check`,requestOptions)
        .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');


                 const data = isJson && await response.json();




                 const testarray = ["a","s","as"]

                 ingredientListSet(data);

                 // console.log(data)
                // return data;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                // this.setState({ postId: data.id })
            }
        ).catch(function (error) {
            console.log(error);
        })
    }

// =======================================================================


    return (

        <View style={styles.container}>
            <Text style={styles.title}>Ishan Randika</Text>
            <Text style={styles.instructions}>OCR TEST</Text>
            <View style={styles.options}>
                <View style={styles.button}>
                    <Button
                        color="#107E7DFF"
                        disabled={isLoading}
                        title="Camera"
                        onPress={() => {
                            recognizeFromCamera();
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color="#107E7DFF"
                        disabled={isLoading}
                        title="Picker"
                        onPress={() => {
                            recognizeFromPicker();
                        }}
                    />
                </View>
            </View>
            {imgSrc && (
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imgSrc} />
                    {isLoading ? (
                        <ProgressCircle showsText progress={progress} />
                    ) : (
                        <Text>{text}</Text>

                    )}
                </View>
            )}
            <View style={styles.button}>
                {/*<Button*/}
                {/*    disabled={isLoading}*/}
                {/*    title="Check"*/}
                {/*    onPress={() => {*/}

                {/*        var array = text.split(" ");*/}


                {/*        var arraytest = ["HA", "HB","UA","A", "B", "UB", "UC","HC","HD","HE","UC","UD","UE", "UKA","HKD","HKE","HKC"]*/}
                {/*        checkIngredient(arraytest);*/}

                {/*        console.log(arraytest);*/}

                {/*        navigation.navigate('Results')*/}

                {/*    }}*/}
                {/*/>*/}

                <Button
                    disabled={isLoading}
                    title="Check"
                    onPress={() => {

                        var array = text.split(" ");


                        var arraytest = ["HA", "HB","UA","A", "B", "UB", "UC","HC","HD","HE","UC","UD","UE", "UKA","HKD","HKE","HKC"]

                        checkIngredient(arraytest);

                        console.log(arraytest);

                        // console.log(ingredientList)

                        navigation.navigate('YourResult',
                            ingredientList
                        )

                    }}
                />

            </View>




            {/*===================================*/}
            {/*<View style={styles.button}>*/}
            {/*    <Button*/}
            {/*        disabled={isLoading}*/}
            {/*        title="DB"*/}
            {/*        onPress={() => {*/}
            {/*            var array = text.split(" ");*/}
            {/*            console.log(array);*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</View>*/}
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        marginHorizontal: 10,

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginVertical: 15,
        height: DEFAULT_HEIGHT / 2.5,
        width: DEFAULT_WITH / 2.5,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default OCR;
