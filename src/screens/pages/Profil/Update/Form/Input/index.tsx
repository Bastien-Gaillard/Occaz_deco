
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './style'

const Input = ({name, value, onChange}) => {

    const [text, onChangeText] = React.useState(value);

    const handleInputChange = (event) => {
        onChangeText(event);
        onChange(event);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput
                style={[styles.input]}
                onChangeText={handleInputChange}
                value={text}
            />
        </View>
    );


};
export default Input;

