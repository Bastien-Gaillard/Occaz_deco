
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = ({ name, onPress }) => {

    let ScreenHeight = Dimensions.get('window').height;

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
        title: {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 26,
            lineHeight: 32,
            color: '#4F63AC',
            marginLeft: 16
        },
    });

    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <Icon name="arrowleft" size={18} color="#4F63AC" onPress={onPress} />
            <Text style={styles.title}>{name}</Text>
        </View>
    );


};
export default Footer;

