import React,{useContext,useLayoutEffect} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext'
import { AntDesign } from '@expo/vector-icons'; 

const ShowScreen =({route,navigation})=>{ 
    const id  =route.params.id
//   je recois ma liste de blog dans ma variable state et je peux afficher un article en fonction de l'id  
// La méthode find() renvoie la valeur du premier élément trouvé dans le tableau
//  qui respecte la condition donnée par la fonction de test passée en argument.
  const {state}= useContext(Context)
   
  React.useLayoutEffect(()=>{
      navigation.setOptions({
          headerRight:()=>
          (
              <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:id})}>
              <AntDesign name="edit" size={30} color="black" />
              </TouchableOpacity> 

          )
      })
  })
 

  const blogPost = state.find((blogpost)=>{
      return blogpost.id === id
  })
    
    return(
        <View>
        <Text>{blogPost.title} </Text>
        <Text>{blogPost.contenu} </Text>
        </View>
    )
}
const styles= StyleSheet.create({

})
export default ShowScreen;