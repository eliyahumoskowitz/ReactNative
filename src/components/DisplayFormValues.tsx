import React, { useState } from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type DisplayFormValuesScreenProps = {
    route: RouteProp<any, "DisplayFormValues">,
    navigation: FrameNavigationProp<MainStackParamList, "DisplayFormValues">
}

export function DisplayFormValues({ navigation, route }: DisplayFormValuesScreenProps) {
    console.log("🚀 ~ file: DisplayFormValues.tsx ~ line 15 ~ DisplayFormValues ~ params", route.params)
    const formValues = route.params.formValues;

    const [loading, setLoading] = useState(true);

    return (<>
        <absoluteLayout backgroundColor="pink" >
            {loading ? <><activityIndicator busy={loading} left={40} top={10} width={300} height={100} backgroundColor="#43b883" />
                <button
                    left={90} top={60} width={200} height={50} backgroundColor="#43b883"
                    onTap={() => setLoading(false)}
                    style={{ zIndex: 1000 }}
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
            columns="*, *"
            rows="*, *"
        >
            <label style={styles.text} text={"Name\n\n" + formValues?.name} row={0} col={0} backgroundColor="lightyellow" textWrap={true} padding={10} />
            <label style={styles.text} text={"Email\n\n" + formValues?.email} row={0} col={1} backgroundColor="lightblue" textWrap={true} padding={10} />
            <label style={styles.text} text={"Phone\n\n" + formValues?.phone} row={1} col={0} backgroundColor="lightpink" textWrap={true} padding={10} />
            <label style={styles.text} text={"User Name\n\n" + formValues?.userName} row={1} col={1} backgroundColor="lightyellow" textWrap={true} padding={10} />
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
