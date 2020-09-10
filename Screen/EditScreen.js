import React,{useState,useContext} from 'react'
import {Context} from '../Context/BlogContext'
import {View,Text,TextInput,Button,StyleSheet} from 'react-native'

const EditScreen =({route,navigation})=>{
    const {state,editBlogPost}= useContext(Context)
    const id = route.params.id

    const blogPost = state.find((blogPost)=>{
        return blogPost.id===id
    })
    const [title,setTitle]= useState(blogPost.title);
    const [contenu,setContenu] = useState(blogPost.contenu)
    return(
        <View style={styles.vue} >
        <Text style= {styles.label} > Modifier titre </Text>
        <TextInput value={title} onChangeText={(newtext)=>setTitle(newtext)} style={styles.contenu} />
        <Text style={styles.label} > Modifier Contenu </Text>
        <TextInput value={contenu}  onChangeText={(newtext)=>setContenu(newtext)} style={styles.contenu} />
        <Button title ='Save Blog Post ' onPress={()=>editBlogPost(id,title,contenu)} />
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

export default EditScreen; 