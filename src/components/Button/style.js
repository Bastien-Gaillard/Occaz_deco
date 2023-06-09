import { StyleSheet } from "react-native";
import color from "../../utils/color";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.blue,
        borderRadius: 8,
        width: 303,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%'
    }, 
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
    }
})