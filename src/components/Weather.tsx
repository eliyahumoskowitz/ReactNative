import React, { useEffect, useState } from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type DisplayFormValuesScreenProps = {
    route: RouteProp<MainStackParamList, "DisplayFormValues">,
    navigation: FrameNavigationProp<MainStackParamList, "DisplayFormValues">,
}

export function Weather({ navigation }: DisplayFormValuesScreenProps) {
    const apiKey = '560dcb7398e09264815a14af891179c4';

    let [zip, setZip] = useState('');
    let [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({city: '', temp: '', description: '', feel: '', humidity: '', icon: ''});

    // useEffect(() => {
        const getWeather = async () => {
        setLoading(true);
        try{
        let r = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=imperial`);
        if (!r.ok) {
            //I got the message this way
            let x = await r.json();
            let msg = x.message;
            throw new Error(`${r.status} ${r.statusText} ${msg}`);
        }
        let weatherData = await r.json();
        console.log(weatherData)
        setLoading(false);
        setWeather({
            city: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            feel: weatherData.main.feels_like,
            humidity:weatherData.main.humidity,
            icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        });
    }catch(error){
        console.error(error);
        setLoading(false);
        setWeather({city: '', temp: error, description: '', feel: '', humidity: '', icon: ''});
    }
    }
    // })()}, [weather]);

    return (<absoluteLayout backgroundColor="lightyellow" height="100%" >
        <button style={styles.goHome} left={150} top={0} width={100} height={50}  onTap={() => navigation.navigate("Home")}>Go Home</button>
        <searchBar
            left={120} top={20} width={200} height={100}
            hint="Enter Zip"
            text={zip}
            onTextChange={e => setZip(e.value)}
            onSubmit={getWeather}
        />
        {loading && <activityIndicator busy={true} left={0} top={50} width={420} height={700} />}
        {!loading && <gridLayout columns="*, *, *" rows="*, *, *" style={styles.container} >
            <label text={weather.city ? `The Weather in \n\n${weather.city}` : ''} row={0} col={0} textWrap={true} style={styles.input}  />
            <label text={typeof(weather.temp) === 'number' ? `Tempature: \n\n${weather.temp} ° Farenheit` : `\n\n${weather.temp}`} row={0} col={1} textWrap={true} style={styles.input} />
            <label text={weather.description} row={0} col={2} textWrap={true} style={styles.input} />
            <label text={weather.feel ? `Real Feel: \n\n${weather.feel} ° Farenheit` : ''} row={1} col={0}  textWrap={true} style={styles.input} />
            <label text={weather.humidity ? `Humidity: \n\n${weather.humidity} ° Farenheit` : ''} row={1} col={1} textWrap={true} style={styles.input} />
            <label backgroundImage={weather.icon} row={1} col={2} textWrap={true} style={styles.icon} />
            {/* <image src={weather.icon}  /> */}
        </gridLayout>}
    </absoluteLayout>);
}

const styles = StyleSheet.create({
    container: {
        left: 0,
        top: 150,
        width: 420,
        height: 700,
        color: "pink",
        backgroundColor: "#289212"
    },
    input: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 5,
        paddingTop: 70,
        textTransform: "uppercase",
        textAlignment: "center"
    },
    icon: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    flexList:{

    },
    list: {

    },
    button: {

    },
    deleteButton: {


    },
    empty: {

    },
    goHome: {
        fontSize: 15,
        color: "#2e6ddf",
        backgroundColor: "yellow",
    }
});

