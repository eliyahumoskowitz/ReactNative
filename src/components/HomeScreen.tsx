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



export function HomeScreen({ navigation }: HomeScreenProps) {



    return (<>
        <flexboxLayout style={styles.container}>
            <label
                className="fas"
                style={styles.text}
            >
                &#xf135; Hello World!
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Thank you!!")}
            >
                Tap me for a nice alert!!
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('ToDo')}
            >
                Go to ToDo
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Secondary')}
            >
                Go to Secondary
            </button>
        </flexboxLayout>
    </>);
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
