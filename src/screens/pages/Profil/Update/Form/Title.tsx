import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const Title = ({ name, icon }) => {

    const styles = StyleSheet.create({
        contenaire: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginBottom: 16,
        },
        title: {
            fontFamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 22,
            color: '#909191',
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
        <View style={styles.contenaire}>
            <Text style={styles.title}>{name}</Text>
            {!!icon && <Icon name={icon} size={24} />}
        </View>
    );


};
export default Title;