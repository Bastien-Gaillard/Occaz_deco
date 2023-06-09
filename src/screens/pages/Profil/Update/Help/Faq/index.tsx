
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Faq = () => {

    const [displayFaq, setDisplayFaq] = useState(true)
    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            marginLeft: '5%',
            width: '90%',
        },
        title: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 17,
            marginBottom: 9,
            color: '#303030',
        },
        text: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 17,
            marginBottom: 9,
            color: '#808080',
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is this app</Text>
            <Text style={styles.text}>This app is a plateform for buy or sell second-hand interior furniture</Text>
            <Text style={styles.title}>Who are wep</Text>
            <Text style={styles.text}>I'm Bastien GAILLARD a 3rd year student at Nextech</Text>
        </View>

    );


};
export default Faq;

