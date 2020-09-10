import React from 'react';
import createDataContext from './createDataContext';

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'edit_blogpost':
            return state.map((blogpost)=>{
                return blogpost.id === action.value.id ? action.value : blogpost;
            })
        case 'delete_blogposts':
            // La méthode filter() crée et retourne un nouveau tableau contenant 
            // tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
        return  state.filter((blogpost)=>{
            return blogpost.id !== action.value
        })
        case 'add_blogposts':
            return [ 
                 ...state,
                {
                 id:Math.floor(Math.random()*99999),
                    title: action.value.title,
                    contenu: action.value.contenu
                } ];
            default:
                return state;
    }
}
// Nous passons ici une fonction qui décrit comment nous voulons changer les données de notre Etat
// Nous passons cela comme deuxiéme argument pour créer des contextes de données
// Ma fonction addBlogPost pour l'ajout d'un article de blog doit avoir accés à dispatch 
const addBlogPost=(dispatch)=>{
    return (title,contenu,callback)=>{
        dispatch({
            type:'add_blogposts',
            value:{
                title:title,
                contenu:contenu
            }
       });
       callback();
    } 
}
// Ma fonction qui permet de supprimer un poste
const deleteBlogPost=(dispatch)=>{
    return(id)=>{
        dispatch({
            type:'delete_blogposts',
            value: id
        })
    }
}

// Ma fonction qui permet de modifier un Post
const editBlogPost =(dispatch)=>{
    return(id,title,contenu)=>{
        dispatch({
            type:'edit_blogpost',
            value:{
                id:id,
                title:title,
                Contenu:contenu
            }
        })

    }
}

export const {Context,Provider} = createDataContext(
    blogReducer,
    // Nous allons mettre dans un objet toutes les différents actions que nous voulons avoir(ajouter,supprimer,modifier).(Tous ces actions sont disponibles via notre context)..
    { addBlogPost,deleteBlogPost,editBlogPost },
    // Mon état initial cad  mon tableau d'objet vide..
    [{title:'Test Post',contenu:'Test Contenu ',id:1},
    {title:'Test Post2',contenu:'Test Contenu2 ',id:2},
    {title:'Test Post3',contenu:'Test Cnotenu3 ',id:3}
]

)

  
