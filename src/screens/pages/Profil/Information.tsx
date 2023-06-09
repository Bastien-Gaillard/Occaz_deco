import { StyleSheet, Text, View } from 'react-native';

const Information = ({ name, email }) => {

    const styles = StyleSheet.create({
        contain: {
            position: 'relative',
            top: 100,
            marginLeft: '5%',
            height: 200
        },
        name: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 20,
            lineHeight: 27,
            color: '#303030',
            marginBottom: 12
        },
        email: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 15,
            textAlign: 'justify',
            color: '#808080',
            marginBottom: 12
        },
    });

    return (
        <View style={styles.contain}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    );


};
export default Information;