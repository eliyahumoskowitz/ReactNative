import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { SecondaryScreen } from "./SecondaryScreen";
import { DisplayFormValues } from "./DisplayFormValues";
import { ToDo } from "./ToDo";
import { Weather } from "./Weather";
// import { List } from "./List";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Secondary"
                options={{
                    title: "Hello"
                }}
                component={SecondaryScreen}
            />
            <StackNavigator.Screen
                name="DisplayFormValues"
                options={{
                    title: "Your Information"
                }}
                component={DisplayFormValues}
            />
             <StackNavigator.Screen
                name="ToDo"
                options={{
                    title: "My To Do List"
                }}
                component={ToDo}
            />
               <StackNavigator.Screen
                name="Weather"
                options={{
                    title: "Weather Forecast"
                }}
                component={Weather}
            />
            {/* <StackNavigator.Screen
                name="List"
                options={{
                    title: "My List"
                }}
                component={List}
            /> */}
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
