import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 12, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#8D9BB5',
        borderStyle: 'solid',
        borderRadius: 14,
        minHeight: 60,
        width: 303,
        paddingHorizontal: 17,
        paddingVertical: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        color: '#4F63AC',
        marginBottom: 9
    }
})