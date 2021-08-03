import React, {useState} from 'react';
import { View } from 'react-native';
//Botão de plus
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home(){
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    // Se for clicado na categoria desmarca ou marca
    categoryId === category ? setCategory('') : setCategory(categoryId);

    // mesma coisa de fazer
    // if(categoryId === category){
    //   setCategory('')
    // }else{
    //   setCategory(categoryId)
    // }
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd />
      </View>
      
      <View>
        <CategorySelect
          categorySelected = {category}
          setCategory={handleCategorySelect} 
        />
      </View>
    </View>
  );
}