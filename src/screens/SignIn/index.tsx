import React, {useState} from 'react';
import { 
  Text, 
  View, 
  Image
} from 'react-native';

import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from '../../components/ButtonIcon';
export function SignIn() {
  // const [text, setText] = useState('Seu nome');


  return (
    <View style={styles.container}>
      
      <Image 
        source={IlustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se  {'\n'}
          e organize suas {`\n`}
          jogatinas
         
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos {`\n`}
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}