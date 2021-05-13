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
    let [date, setDate] = useState(new Date());
    let [search, setSearch] = useState('');

    const setToDoList = (text: string) => {
        if (!text?.trim()) return

        setUnique(++unique);
        setList(list.concat({ text, id: unique }));
        setInput('');
    };
    // handleTextChanged

    const renderTodo = (todo) => {
        return (
            <flexboxLayout flexDirection="row" justifyContent="space-between" style={styles.flexList} key={todo.id} >
                <label style={styles.label} text={`Please Remember to ${todo.text}`} height="70" textWrap={true} />
                <button style={styles.deleteButton} onTap={() => {
                    setList(list.filter(li => li.id != todo.id));
                    console.log(list)
                }} />
            </flexboxLayout>
        )
    }

    return (
        <stackLayout style={styles.container}>
            <datePicker style={{height: "15%"}}
                date={date}
                onDateChange={e => {
                    setDate(e.value);
                }}
            />
            {/* <textView
                text={input}
                hint="Type a note here"
                onTextChange={e => setInput(e.value)}
                // onSubmit
            // onReturnKeyTypeChange={() => console.log('changed')}
            // returnKeyType="go"
            /> */}
            <searchBar
                hint="Type a note here"
                text={input}
                onTextChange={e => setInput(e.value)}
                onSubmit={() => { setToDoList(input) }}
            />
            <button
                style={styles.button}
                onTap={() => { setToDoList(input) }}
                text="Add Note"
            />
                <button style={styles.goHome} onTap={() => navigation.navigate("Home")}>Go Home</button>
            <label
                text={`on ${date.toDateString()}`}
                dock="top"
                height="40"
                backgroundColor="#289062"
                style={{ color: "purple", fontSize: 20, textAlignment: "center", fontWeight: "bold" }}
            />
                {list.length ? <><searchBar
                                    hint="Search List"
                                    text={search}
                                    onTextChange={e => setSearch(e.value)}
                                    /><button style={styles.deleteAll} text="Delete All" onTap={() => setList([])} /></> : null }
                <scrollView style={{height: "100%"}}>
                    <stackLayout>
                        {list.filter(lf => lf.text.includes(search)).map(l => renderTodo(l))}
                        {!list.length && <label text="Your To Do List is Empty" style={styles.empty} />}
                        {list.length && !list.filter(lf => lf.text.includes(search)).length ? <label text="Search came up empty" style={styles.empty} /> : null }
                    </stackLayout>
                </scrollView>

        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    deleteAll: {
        fontSize: 20,
        fontFamily: "",
        color: "#2e5ddf",
        backgroundColor: "lightgreen",
        height: "9%"
    },
    label: {
        fontSize: 20,
        // display: "inline"
    },
    flexList: {
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
        marginTop: 10,
        color: "white",
        backgroundColor: "blue",
        // borderColor: "yellow",
        borderRadius: "10%"
    },
    deleteButton: {
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRvB74YdMnrggPyzKvkx6c5WUB7YZyELYPg&amp;usqp=CAU",
        backgroundRepeat: "no-repeat",
        minWidth: "25%",
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
        backgroundColor: "pink",
        height: "9%"
    }
});
// // #2e6ddf
