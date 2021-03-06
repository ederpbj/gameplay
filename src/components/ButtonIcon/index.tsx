import React from 'react';
//para ações de botões do usuário
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import { Text, Image, View} from 'react-native';
//TouchableOpacity, //TouchableOpacityProps,

import DiscordImg from '../../assets/discord.png';
import {styles} from './styles';

//Criamos novo tipo, junto com as propriedades do touchableOpacity
// type Props = TouchableOpacityProps & {
type Props = RectButtonProps & {
  title: string;
}
export function ButtonIcon({ title, ...rest }: Props){
  return (
    // <TouchableOpacity
    <RectButton 
      style={styles.container} 
      {...rest} //pega todo resto das propriedades
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
        {/* Entrar com Discord */}

      </Text>
    </RectButton>
    // </TouchableOpacity>
  )
}