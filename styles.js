import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5
    },
    card: {
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        width: '75%',
        padding: 10,
        margin: 5
    },
    text: {
        color: 'white',
        margin: 5
    },
    textInput: {
        backgroundColor: 'blue',
        color: 'white',
        height: 40,
        width: '50%',
        margin: 5,
        padding: 10
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 40,
        width: '50%',
        margin: 5,
        padding: 5
    },
});
export default styles