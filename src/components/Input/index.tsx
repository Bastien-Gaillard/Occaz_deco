import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InputText({ placeholder, name, secureTextEntry, style, value, onChange, options, icon, multiline, numberOfLines }) {

    const [text, onChangeText] = React.useState(value);
    const [display, setDisplay] = React.useState(false)

    const handleInputChange = (event) => {
        onChangeText(event);
        onChange(event);
    }

    const pressInput = () => {
        setDisplay(!display);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {options ? (
                    <View>
                        <TouchableOpacity onPress={pressInput}>
                            <TextInput
                                style={styles.input}
                                value={text}
                                placeholder={placeholder}
                                secureTextEntry={secureTextEntry}
                                editable={false}
                            />
                            {display && options.map((option, index) => (
                                // <Button title={option.name} onPress={onChangeText(option.name)} style={undefined} styleText={undefined} activeOpacity={undefined} icon={undefined} colorIcon={undefined} />
                                <TouchableOpacity onPress={() => { onChangeText(option.name), setDisplay(false), onChange(option.id) }} style={{ width: '100%', height: 40, backgroundColor: '#ffffff', borderBottomWidth: 1, borderColor: '#ebebeb', borderStyle: 'solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: '900' }}>{option.name}</Text>
                                </TouchableOpacity>

                            ))}
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChange}
                        value={text}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                    />
                )}
                {!!icon && <Icon style={{ position: 'absolute', right: 50, top: 12 }} name={icon} size={32} color="#4F63AC" />}
            </View>
        </View>
    )
}


