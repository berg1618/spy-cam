import React from "react";
import { View, StatusBar } from "react-native";
import { setBackgroundColorAsync } from "expo-navigation-bar";

const CustomizedBar = () => {
    React.useEffect(() => {
        setBackgroundColorAsync("#000000");
    });
    return (
        <View>
            <StatusBar style={backgroundColor = "#000000"} />
        </View>
    );
};

export default CustomizedBar;