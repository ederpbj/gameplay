import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes} from './auth.routes';
//Organiza todas as rotas
export function Routes(){
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}