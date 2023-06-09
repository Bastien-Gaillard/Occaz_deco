import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginBottom: 12
    },
    checkBox: {
        marginRight: 12,
        width: 22,
        height: 22,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8D9BB5',
        borderStyle: 'solid'
    },
    label: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        color: '#4F63AC',
    }
})