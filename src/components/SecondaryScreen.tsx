import React, {useState} from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";

type SecondaryScreenProps = {
    route: RouteProp<MainStackParamList, "Secondary">,
    navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
}

export function SecondaryScreen({ navigation }: SecondaryScreenProps) {

    let [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        userName: ''
    });

    return (<>
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>
                You're looking at the secondary screen!
            </label>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Home')}//goBack()}
            >
                Go back Home!!
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
            onTap={() => navigation.navigate('DisplayFormValues', {formValues})}
        >
            Submit
        </button>
    </flexboxLayout>

    <stackLayout backgroundColor="yellow" style={styles.input} >
        <textField text={formValues.name} hint="Enter Name" returnKeyType="next" onTextChange={e => setFormValues({...formValues, name: e.value})}/>
        <textField text={formValues.email} hint="Enter Email" onTextChange={e => setFormValues({...formValues, email: e.value})}/>
        <textField text={formValues.phone} hint="Enter Phone" onTextChange={e => setFormValues({...formValues, phone: e.value})}/>
        <textField text={formValues.userName} hint="Enter User Name" onTextChange={e => setFormValues({...formValues, userName: e.value})} />
    </stackLayout>
    </>);
}

const styles = StyleSheet.create({
    container: {
        height: "70%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "pink",
    },
    text: {
        textAlignment: "center",
        // overflow: "auto",
        fontSize: 20,
        color: "green",
    },
    input: {
        height: "65%",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        fontSize: 20,
        color: "#2e6ddf",
        backgroundColor: "yellow"
    },
});
