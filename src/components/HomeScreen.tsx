import React, { useState } from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export let exportformValues;

export function HomeScreen({ navigation }: HomeScreenProps) {

    let [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        userName: ''
    });
    exportformValues = formValues;

    return (<>
        <flexboxLayout style={styles.container}>
            <label
                className="fas"
                style={styles.text}
            >
                &#xf135; Hello {formValues.name || 'New Comer'}!
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Thank you!!")}
            >
                Tap me for a nice alert!!
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Secondary')}
            >
                Go to Secondary
            </button>
        </flexboxLayout>

        <flexboxLayout style={styles.container}>
            <label
                className="fas"
                style={styles.text}
            >
                &#xf122; Hey! Submit Your Form!
            </label>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('DisplayFormValues')}
            >
                Submit
            </button>
        </flexboxLayout>

        <stackLayout backgroundColor="yellow" style={styles.input} >
            <textField text={formValues.name} hint="Enter Name" onTextChange={e => setFormValues({...formValues, name: e.value})}/>
        {/* </stackLayout> */}
        {/* <stackLayout style={styles.input} backgroundColor="pink"> */}
            <textField text={formValues.email} hint="Enter Email" onTextChange={e => setFormValues({...formValues, email: e.value})}/>
        {/* </stackLayout> */}
        {/* <stackLayout backgroundColor="yellow" style={styles.input}> */}
            <textField text={formValues.phone} hint="Enter Phone" onTextChange={e => setFormValues({...formValues, phone: e.value})}/>
        {/* </stackLayout> */}
        {/* <stackLayout backgroundColor="pink" style={styles.input}> */}
            <textField text={formValues.userName} hint="Enter User Name" onTextChange={e => setFormValues({...formValues, userName: e.value})} />
        </stackLayout>
    </>);
}

const styles = StyleSheet.create({
    container: {
        height: "70%",
        flexDirection: "column",
        justifyContent: "center",
    },
    input: {
        height: "65%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "white",
        backgroundColor: "blue",
        // height: "50%"
    },
});
// #2e6ddf
