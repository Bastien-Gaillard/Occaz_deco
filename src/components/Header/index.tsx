
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = ({ name, logout, leftArrow, navigation, backValue }) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',

            top: 10,
            width: '100%',
        },
        titleContainer: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 20,
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#303030',
        },
        categorieContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 12,
            width: 75,
            height: 75,
        },
        categorieDiv: {
            width: 44,
            height: 44,
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19,
        },
    });

    return (
        <View style={styles.container}>
            {leftArrow && <Icon style={{ marginLeft: 18 }} name="chevron-left" size={32} color="#4F63AC" onPress={() => navigation.navigate(backValue)} />}
            <Text style={styles.titleContainer}>{name}</Text>
            {logout && <Icon style={{ marginRight: 18 }} name="logout" size={24} color="#4F63AC" onPress={async () => { AsyncStorage.removeItem('user'), navigation.navigate('SignIn') }} />}
        </View>
    );


};
export default Footer;

