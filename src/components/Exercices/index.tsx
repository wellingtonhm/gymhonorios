import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'


export function Exercices(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageSize}
                source={require('./img/exercices_one.png')}
            />
            <View style={styles.containerExercice}>
                <Text style={styles.textOne}>
                    {props.nameExercice}
                </Text>
                <Text style={styles.textTwo}>
                    {props.descriptionExercice}
                </Text>
            </View>
        </View>
    )
};

export default Exercices