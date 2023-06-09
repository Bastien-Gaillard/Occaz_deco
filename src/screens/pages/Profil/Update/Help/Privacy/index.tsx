
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
            paddingBottom: 120
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
                <Text style={styles.title}>Privacy Policy:</Text>
                <Text style={styles.text}>- We value your privacy and are committed to protecting your personal information.</Text>
                <Text style={styles.text}>- We use cookies and similar technologies to analyze website traffic and personalize content.</Text>
                <Text style={styles.text}>- Your information is securely stored and will not be shared with third parties without your consent, unless required by law.</Text>
                <Text style={styles.text}>- You have the right to access, update, and delete your personal information by contacting us.</Text>
                <Text style={styles.text}>- By using our services, you agree to the terms and conditions outlined in our privacy policy.</Text>
                <Text style={styles.title}>Terms and Conditions:</Text>
                <Text style={styles.text}>- By accessing and using our website, you agree to be bound by these terms and conditions.</Text>
                <Text style={styles.text}>- The content on our website is for informational purposes only and should not be considered as professional advice.</Text>
                <Text style={styles.text}>- We reserve the right to modify or terminate our services at any time without prior notice.</Text>
                <Text style={styles.text}>- You are responsible for maintaining the confidentiality of your account credentials and are liable for any actions taken using your account.</Text>
                <Text style={styles.text}>- We may link to third-party websites for your convenience, but we do not endorse or guarantee the accuracy of their content.</Text>
        </View>
    );


};
export default Faq;

