import React from 'react';
import { Text, View } from 'react-native';

const Speaker = ({data}) => (
    <View>
        {console.log(data)}
        <Text>This is the speaker</Text>
    </View>
);

export default Speaker;
