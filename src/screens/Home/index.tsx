import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
//Botão de plus
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';

import { styles } from './styles';

export function Home(){
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1', 
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1', 
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

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

        <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList />

        </View>
      </View>
    </View>
  );
}