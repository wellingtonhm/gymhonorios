import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: "space-around",

    },
    imageSize: {
        position: 'absolute',
        resizeMode: 'cover',
        borderRadius: 20,
        height: '100%',
        width: '100%'
    },
    containerExercice: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 60

    },
    textOne: {
        color: 'white'
    },
    textTwo: {
        color: '#D0FD3E'
    }
})