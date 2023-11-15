import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/color';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.lg}}>
        Andrei repo!
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

export default App;
