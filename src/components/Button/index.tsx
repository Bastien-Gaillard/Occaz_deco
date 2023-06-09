import { TouchableOpacity, Text } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Button({ title, onPress, style, styleText, activeOpacity, icon, colorIcon }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]} activeOpacity={activeOpacity}>
            {!!icon
                ? <Icon name={icon} size={28} color={colorIcon} />
                : <Text style={[styles.text, styleText]}>{title}</Text>
            }
        </TouchableOpacity >
    )
}
