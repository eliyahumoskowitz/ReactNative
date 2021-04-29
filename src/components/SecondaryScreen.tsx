import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";

type SecondaryScreenProps = {
    route: RouteProp<MainStackParamList, "Secondary">,
    navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
}

export function SecondaryScreen({ navigation }: SecondaryScreenProps) {
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
    button: {
        fontSize: 20,
        color: "#2e6ddf",
        backgroundColor: "yellow"
    },
});
