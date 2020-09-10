import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../Context/BlogContext';


const CreateScreen =({navigation})=>{
    const {addBlogPost} = useContext(Context);
    const [title,setTitle]= useState('');
    const [contenu,setContenu] = useState('')
    return(
        <View style={styles.vue}>
        <Text style= {styles.label}> Entrer le titre  </Text>
        <TextInput value={title} onChangeText={(text)=>setTitle(text)} style={styles.contenu} />
        <Text style= {styles.label}> Entrer le Contenu  </Text>
        <TextInput value={contenu} onChangeText={(text)=>setContenu(text)} style={styles.contenu} />
        <Button title=' Ajouter un nouveau blog '
         onPress={()=>{
             addBlogPost(title,contenu,()=>{
                 navigation.navigate("Index")
             })
         }
          }
          />
        </View>
    )
}
const styles = StyleSheet.create({
    vue:{
        margin:10

    },
    contenu:{
        fontSize: 18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5
    },
    label:{
        fontSize:20,
        marginBottom:6
    }

});
export default CreateScreen;