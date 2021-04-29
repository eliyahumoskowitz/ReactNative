import React, {useState} from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import {exportformValues as formValues} from './HomeScreen';

type DisplayFormValuesScreenProps = {
    route: RouteProp<MainStackParamList, "DisplayFormValues">,
    navigation: FrameNavigationProp<MainStackParamList, "DisplayFormValues">,
}

export function DisplayFormValues({ navigation }: DisplayFormValuesScreenProps) {

    const [loading, setLoading] = useState(true);

    return (<>
        <absoluteLayout backgroundColor="pink">
        {loading ? <><activityIndicator busy={loading} left={40} top={10} width={300} height={100} backgroundColor="#43b883" />
        <button
        left={90} top={60} width={200} height={50} backgroundColor="#43b883"
        onTap={() => setLoading(false)}
    >
        Tap to finish Loading
    </button></> :
            <button
                left={40} top={10} width={300} height={100} backgroundColor="#43b883"
                style={styles.button}
                onTap={() => navigation.navigate('Home')}
            >
                Go Back Home!
            </button>}
        </absoluteLayout>

        <gridLayout
            style={styles.container}
            columns="180, 178"
            rows="325, 325"
            >
            <label style={styles.text} text={"Name\n\n" + formValues.name} row={0} col={0} backgroundColor="lightyellow" textWrap={true} padding={10} />
            <label style={styles.text} text={"Email\n\n" + formValues.email} row={0} col={1} backgroundColor="lightblue" textWrap={true} padding={10}/>
            <label style={styles.text} text={"Phone\n\n" + formValues.phone} row={1} col={0} backgroundColor="lightpink" textWrap={true} padding={10}/>
            <label style={styles.text} text={"User Name\n\n" + formValues.userName} row={1} col={1} backgroundColor="lightyellow" textWrap={true} padding={10}/>
        </gridLayout>
    </>);
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        flexDirection: "column",
        justifyContent: "center",
        verticalAlignment: "middle"
    },
    input: {
        height: "65%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 25,
        textTransform: "uppercase",
        color: "blue",
        fontFamily: "impact",
    },
    button: {
        fontSize: 24,
        textAlignment: "center",
        margin: "auto",
        color: "white",
        backgroundColor: "blue"
    },
});
// #2e6ddf
