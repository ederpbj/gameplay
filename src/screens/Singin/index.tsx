import React, {useState} from 'react';
import { 
  Text, 
  View, 
  TextInput,
  Image,
  StatusBar 
} from 'react-native';

import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png';

export function Signin() {
  // const [text, setText] = useState('Seu nome');


  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
        source={IlustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize  {`\n`}
          suas jogatinas {`\n`}
          facilmente
          
          {/* Outra forma
          {`Organize  
          suas jogatinas
          facilmente`} 
          */}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos {`\n`}
        </Text>
      </View>
      {/* <Text>Signin</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setText}
      />

      <Text>
        Você digitou: {text}
      </Text> */}
    </View>
  );
}
