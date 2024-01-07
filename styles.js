import { StyleSheet } from 'react-native';
import * as colors from './colorSchemes';
const colorScheme = colors.tealLight

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colorScheme.darkest,
        alignItems: 'center',
        padding: 5,
    },
    buttonColor: colorScheme.neutralLight,
    card: {
        backgroundColor: colorScheme.neutralDark,
        height: 'auto',
        width: '90%',
        padding: 10,
        margin: 5
    },
    questCard: {
        backgroundColor: colorScheme.neutralDark,
        alignItems: 'center',
        height: 'auto',
        width: '90%',
        padding: 10,
        margin: 5
    },
    contentContainerStyle: {
        alignItems: 'center'
    },
    header: {
        color: colorScheme.text,
        textDecorationStyle: 'double',
        fontWeight: 'bold',
        fontSize: 16
    },
    scrollView: {
        backgroundColor: colorScheme.neutral,
        width: '100%',
        padding: 10,
        margin: 5
    },
    text: {
        color: colorScheme.text,
        margin: 5,
        fontSize: 14
    },
    textInput: {
        backgroundColor: colorScheme.neutral,
        color: 'white',
        height: 40,
        width: 'auto',
        margin: 5,
        padding: 10
    },
    touchableOpactity: {
        flex:1,
        width: '100%',
        alignItems: 'center',
    }
});
export default styles