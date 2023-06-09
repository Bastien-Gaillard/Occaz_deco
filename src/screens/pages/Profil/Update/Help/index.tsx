
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../Form/Title';
import axios from 'axios';
import Button from '../Button';
import Faq from './Faq';
import Contact from './Contact';
import Privacy from './Privacy';

const instance = axios.create({
    baseURL: 'http://51.91.249.126:3010/',
});

const Help = () => {

    const [displayFaq, setDisplayFaq] = useState(false);
    const [displayContact, setDisplayContact] = useState(false)
    const [displayPrivacy, setDisplayPrivacy] = useState(false)

    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            top: 120,
            width: '90%',
            minHeight: 400
        },
    });

    return (
        <View style={styles.container}>
            <View style={{ marginLeft: '5%' }}>
                <Title name='Help Center' icon={undefined} />
            </View>
            <Button id={1} title='FAQ' description={undefined} onPress={() => { setDisplayFaq(!displayFaq) }} style={{ height: 60, marginVertical: 10 }} />
            {displayFaq &&
                <Faq />
            }
            <Button id={2} title='Contact Us' description={undefined} onPress={() => { setDisplayContact(!displayContact) }} style={{ height: 60, marginVertical: 10 }} />
            {displayContact &&
                <Contact />
            }
            <Button id={3} title='Privacy & Terms' description={undefined} onPress={() => { setDisplayPrivacy(!displayPrivacy) }} style={{ height: 60, marginVertical: 10 }} />
            {displayPrivacy &&
                <Privacy />
            }
        </View>
    );


};
export default Help;

