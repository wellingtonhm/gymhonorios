import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Exercices from '../../components/Exercices';
import { styles } from '../Styles/styles';


export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitleUserHome}>
                    OLA WELLINGTON,
                </Text>
                <Text style={styles.textSubtitleUserHome}>
                    Bom dia
                </Text>
            </View>
            <View>
                <Exercices
                />
            </View>
        </View>
    )
};


