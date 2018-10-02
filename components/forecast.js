import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.fontMain}>{this.props.main}</Text>
                <Text style={styles.fontDescription}>{this.props.description}</Text>
                <View style={styles.tempContainer}>
                    <Text style={styles.fontTemp}>{this.props.temp}</Text>
                    <Text style={styles.fontC}>°C</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tempContainer: {
        display: "flex",
        flexDirection: "row",
    },
    fontMain: {
        color: '#FFB6C1',
        paddingTop: 25,
        fontSize: 32
    },
    fontDescription: {
        color: '#FFB6C1',
        paddingTop: 25,
        fontSize: 18
    },
    fontTemp: {
        color: '#E9967A',
        paddingTop: 25,
        fontSize: 32
    },
    fontC: {
        color: '#E9967A',
        paddingTop: 35,
        fontSize: 18
    }
});