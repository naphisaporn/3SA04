import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Forecast from "./Forecast";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.APPID = "886705b4c1182eb1c69f28eb8c520e20";
        this.state = {
            forecast: {
                main: "main",
                description: "description",
                temp: 0
            }
        };
    }

    componentDidMount = () => this.fetchData();
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }


    fetchData = () => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${
            this.props.zipCode
            },th&units=metric&APPID=${this.APPID}`
        )
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
            })
            .catch(error => {
                console.warn(error);
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../bg2.jpeg")} style={styles.backdrop}>
                    <View style={styles.app}>
                        <Text style={styles.font}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                        <Text style={styles.font}>Naphisaporn Phakphrommin </Text>
                        <Text style={styles.font}>5835512098 </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: "100%", height: "100%" },
    app: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: "center",
        backgroundColor: "rgba(0,60,60,0.5)"
    },
    font: {
        color: "#EEDD82",
        paddingTop: 25,
        fontSize: 20
    }
});