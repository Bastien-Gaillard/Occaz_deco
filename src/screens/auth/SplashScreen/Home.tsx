import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../../../components/Button';
import colors from '../../../utils/color'
const Home = ({ navigation }) => {
    let ScreenHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        home: {
            position: 'relative',
            width: '100%',
            height: ScreenHeight,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
        },
        textContainer: {
            height: 150,
            marginVertical: 60,
        },
        text: {
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 40,
            lineHeight: 49,
            textAlign: 'center',
            color: '#303030',
        },
        secondText: {
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 40,
            lineHeight: 49,
            textAlign: 'center',
            color: colors.orange,
        },
        image: {
            top: '12%',
            width: '100%',
            height: 209,
        },

    });

    return (
        <ScrollView style={styles.home}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/images/home.jpg')} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>You’ll Find</Text>
                <Text style={styles.secondText}>All you need</Text>
                <Text style={styles.text}>Here!</Text>
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button title='Sign up' icon={false} colorIcon={false} onPress={() => navigation.navigate('SignUp')} style={{ backgroundColor: colors.blue }} activeOpacity={0.6} styleText={{ color: '#ffffff' }} />
                <Button title='Sign in' icon={false} colorIcon={false} onPress={() => navigation.navigate('SignIn')} style={{ backgroundColor: '#ffffff' }} activeOpacity={0.6} styleText={{ color: colors.blue }} />
            </View>
        </ScrollView>
    );


};
export default Home;