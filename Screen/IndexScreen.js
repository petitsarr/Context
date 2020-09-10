import React,{useContext,useLayoutEffect} from 'react'; 
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {Context} from '../Context/BlogContext';
import { Entypo } from '@expo/vector-icons';
const IndexScreen =({navigation})=>{
//Récuperation des valeurs que j'ai passé à mon provider qui sont: 
    const  {state,deleteBlogPost} = useContext(Context);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=> 
                (
                <TouchableOpacity style={styles.mybutton} onPress= {()=>navigation.navigate('Create')}>
                <Entypo name="plus" size={24} color="black" />
                 </TouchableOpacity>
            )
        })
    }, [navigation])


    return(
        <View> 
        
       <FlatList
    data={state}       
       keyExtractor={item=>item.id.toString()}
       renderItem= {({item})=>{    
           return(
               <TouchableOpacity onPress= {()=>navigation.navigate('Show',{id:item.id})} >
               <View style={styles.row}>
               <Text style={styles.title}>{item.title} {item.contenu}: {item.id} </Text>
               <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
               <AntDesign style={styles.icon} name="delete" size={15} color="black" />
               </TouchableOpacity>
               </View>
              </TouchableOpacity>
           )
       }}   
       />    
        </View>
    )
}
const styles=  StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:19,
        paddingHorizontal:10,
        borderColor:'gray',
        borderTopWidth:1,
        borderBottomWidth:1  
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    },
    mybutton:{
        marginRight: 20
    }
})
export default IndexScreen;
