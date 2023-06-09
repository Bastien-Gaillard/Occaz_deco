
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import color from '../../utils/color';

const Footer = ({ navigation }) => {

    const route = useRoute();

    const [tabs, setTabs] = useState([
        { icon: "home", active: route.name == 'Main' ? true : false, page: 'Main' },
        { icon: "bookmark", active: route.name == 'Favorites' ? true : false, page: 'Favorites' },
        {
            icon: "account", active:
                route.name == 'Profil' ||
                    route.name == 'Listing' ||
                    route.name == 'Create' ||
                    route.name == 'Help' ? true : false, page: 'Profil'
        },

    ]);

    const styles = StyleSheet.create({
        container: {
            boxShadow: '0px -2px 50px rgba(0, 0, 0, 0.05)',
            height: 75,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: '#ebebeb',

        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 54,
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

    const handlePress = (tab, index) => {
        navigation.navigate(tab.page);
    }

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) =>
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(tab, index)} style={styles.categorieContainer}>
                    <Icon name={tab.icon} size={24} color={tab.active ? color.blue : "#999999"} id={tab.icon} />
                </TouchableOpacity>

            )}
        </View>
    );


};
export default Footer;

