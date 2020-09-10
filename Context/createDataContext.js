import React,{useReducer} from 'react';
// Ma fonction de création de contexte globale que nous pouvons pouvons utiliser plusieurs fois à l'intérieur de l'application.
// L'objet actions va avoir ts nos différents fonctions d'actions.....
//Ces fonctions d'action décrivent comment nous allons changer notre objet d'état
export default (reducer,actions,initialState)=>{
    // creation de mon objet context
    const Context= React.createContext();

    //Création d'une fonction Provider 
    const Provider=({children})=>{
        const [state,dispatch]= useReducer(reducer,initialState);
        /* actions est un objet qui pourrait avoir une clé comme ajouté un article de blog..........
         et cela va étre une fonction qui s'attend à etre appelée avec dispatch,puis
         à l'intérieur nous retournons une fonction qui va faire klk chose
         actions==={addBlogPost:(dispatch)=>{return()=>{}}}
         */
        // création de mon objet boundActions ici
        const boundActions= {};
        for (let key in actions)  {
                // key===addBlogPost...
                boundActions[key]=actions[key](dispatch)
        }
        return(
            <Context.Provider value={{state:state,...boundActions}}>
            {children}
            </Context.Provider>
        )
 
    }
    // je vais retourner mon objet context et ma fonction Provider que j'ai crée.
    return {Context,Provider}
} 
// J'utilise ma fonction de creation de contexte dans mon component BlogContext 