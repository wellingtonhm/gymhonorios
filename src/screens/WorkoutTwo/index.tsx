import React from 'react'
import { View } from 'react-native';

import Exercices from '../../components/Exercices';
import { styles } from '../Styles/styles'

export default function WorkoutTwo() {
    return (
        <View style={styles.container}>
            <View>
                <Exercices
                    nameExercice="Exercicios"
                    descriptionExercice="Descrição do exercicios"
                />
            </View>
        </View>
    )
};