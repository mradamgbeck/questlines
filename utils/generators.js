import uuid from 'react-native-uuid';

export function keyGenerator(prefix){
    return prefix + uuid.v4()
}