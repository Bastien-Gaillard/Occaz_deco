
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../../../../../utils/color';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Contact = () => {

    const [displayFaq, setDisplayFaq] = useState(true)
    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            marginLeft: '5%',
            width: '90%',
        },
        element: {
            height: 40,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            marginLeft: 8,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 17,
            marginBottom: 9,
            color: '#808080',
            marginTop: 8
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <Icon name='phone' size={20} color={color.blue} />
                <Text style={styles.text}>+33 00 00 00 00</Text>
            </View>
            <View style={styles.element}>
                <Icon name='at' size={20} color={color.blue} />
                <Text style={styles.text}>bastien.gaillard@formation-technologique.fr</Text>
            </View>
            <View style={styles.element}>
                <Icon name='map-marker' size={20} color={color.blue} />
                <Text style={styles.text}>180 Rue Philippe de Girard, 84120 Pertuis</Text>
            </View>
        </View>
    );


};
export default Contact;

