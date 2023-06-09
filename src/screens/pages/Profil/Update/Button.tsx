import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import color from '../../../../utils/color';

const Information = ({ id, title, description, onPress, style }) => {

    const styles = StyleSheet.create({
        contenaire: {
            // backgroundColor: '#ffffff',
            width: '90%',
            marginHorizontal: '5%',
            height: 80,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 16,
            backgroundColor: '#ffffff',
            boxShadow: '0px 7px 40px rgba(138, 149, 158, 0.2)'
        },
        title: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 25,
            color: color.blue,
            marginTop: 18
        },
        description: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 15,
            textAlign: 'justify',
            color: '#808080',
        },
        left: {
            width: '90%'
        },
        right: {
            width: '10%',
            height: 80,
            marginVertical: 26
        }

    });

    return (
        <View key={id} style={[styles.contenaire, style]}>
            <TouchableOpacity onPress={onPress} style={{ width: '100%', height: '100%' }} key={id}>
                <View style={styles.left}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );


};
export default Information;