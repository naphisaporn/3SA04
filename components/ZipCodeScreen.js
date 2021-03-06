import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10240' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.font}> Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.app}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    app: {
        backgroundColor: "#ADD8E6"
    },
    font: {
        color: "#8B4513",
        fontSize: 20
    },
    zipItem: {
        flexDirection: 'row',
        margin: 20,

    },
    zipPlace: {
        flex: 2
    },
    zipCode: {
        flex: 1
    }
});