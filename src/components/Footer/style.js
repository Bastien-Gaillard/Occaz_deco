import { StyleSheet } from "react-native";
import colors from '../../../utils/color';


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff'
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#8D9BB5',
        borderStyle: 'solid',
        borderRadius: 14,
        height: 60,
        width: 303,
        paddingHorizontal: 17,
        paddingVertical: 22,
        color: colors.black,

    },
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        marginBottom: 9,
        color: colors.black,
    }
})