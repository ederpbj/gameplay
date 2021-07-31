import React, {ReactNode} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import {styles} from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({children}: Props){
  //desestruturando, as cores com origem em theme.colors
  const {secondary80, secondary100} = theme.colors;
  //colors={[theme.colors.secondary80, theme.colors.secondary100]}

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}