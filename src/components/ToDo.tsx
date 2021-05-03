import React, { useState } from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type DisplayFormValuesScreenProps = {
    route: RouteProp<MainStackParamList, "DisplayFormValues">,
    navigation: FrameNavigationProp<MainStackParamList, "DisplayFormValues">,
}

export function ToDo({ navigation }: DisplayFormValuesScreenProps) {
    let [list, setList] = useState([]);
    let [input, setInput] = useState('');
    let [unique, setUnique] = useState(0);
    // let [date, setDate] = useState(new Date().toDateString());

    const setToDoList = text => {
        console.log(text, "text")
        if (text?.trim() > "") {
            let newList = list
            setUnique(++unique);
            newList.push({text, id: unique});
            setList(newList);
           // input = '';
            console.log("list", list)
        }
    };

    return (<>
        {/* <datePicker
            date={new Date()}
            onDateChange={e => {
                setDate(e.object.toString());
                console.log('datePicker', date);
            }}/> */}

        <stackLayout backgroundColor="pink" style={styles.container} >
            <textView
                text={input}
                style={styles.input}
                hint="Type a note here"
                onTextChange={e => setInput(e.value)}
                // onReturnKeyTypeChange={() => console.log('changed')}
                // returnKeyType="go"
            />
            <button style={styles.button} onTap={() => {setToDoList(input); console.log('this is input', input)}} >Add Note</button>
        </stackLayout >

        <button style={styles.goHome} onTap={() => navigation.navigate("Home")}>Go Home</button>

        <dockLayout stretchLastChild="true" backgroundColor="lightblue" style={styles.list}>
            <label text="" dock="left" width="40" backgroundColor="#43b783" />
            <label text={`To Do on ${new Date().toDateString() /*date*/ }`}dock="top" height="40" backgroundColor="#289062" style={{color: "purple", fontSize: 20, textAlignment: "center", fontWeight: "bold"}}/>
            <label text="" dock="right" width="40" backgroundColor="#43b783" />
            <label text="" dock="bottom" height="40" backgroundColor="#289062" />
            {list.length ? <scrollView><stackLayout  >
                {list.map(l => {
                    return <flexboxLayout flexDirection="row" justifyContent="space-between" style={styles.flexList} key={l.id} >
                    <label style={styles.label} text={`Please Remember to ${l.text}`} height="70" />
                    <button style={styles.deleteButton} onTap={() => {
                        setList(list.filter(li => li.id != l.id));
                         console.log(list)}} />
                    </flexboxLayout>
                })}
            </stackLayout></scrollView> : <label text="Your To Do List is Empty" style={styles.empty} ></label> }
        </dockLayout>
    </>);
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        MinHeight: "25%",
        // marginTop: "5%"
        // flexDirection: "column",
        // justifyContent: "center",
        // verticalAlignment: "middle"
    },
    input: {
        height: "65%",
        // flexDirection: "column",
        // justifyContent: "center",
        textAlignment: "center"
    },
    label: {
        fontSize: 20,
        // display: "inline"
    },
    flexList:{
        // flexDirection: "column",
        // justifyContent: "center",
        backgroundColor: "yellow",
        marginBottom: '20',
        borderBottomWidth: "2",
        borderBottomColor: "black"
    },
    list: {
        height: "60%",
        marginTop: "10%",
        textAlignment: "center",
        fontSize: 25,
        textTransform: "uppercase",
        color: "blue",
        fontFamily: "impact",
        overflow: 'auto'
    },
    button: {
        fontSize: 14,
        width: "30%",
        // textAlignment: "center",
        marginRight: "55%",
        marginTop: "5%",
        color: "white",
        backgroundColor: "blue",
        // borderColor: "yellow",
        borderRadius: "10%"
    },
    deleteButton: {
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRvB74YdMnrggPyzKvkx6c5WUB7YZyELYPg&amp;usqp=CAU",
        backgroundRepeat: "no-repeat",
        width: "15%",
        height: "20%",
        display: "inline"
    },
    empty: {
      textAlignment: 'center',
      color: "red",
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: 20,
      paddingTop: "50%"
    },
    goHome: {
        fontSize: 20,
        color: "#2e6ddf",
        backgroundColor: "yellow",
        // height: "12%"
    }
});
// // #2e6ddf
