import { getDataBeer } from "./PunkAPI.js";

getDataBeer()
.catch(err => console.log( "Votre requête a échoué ! Voici l'erreur : " +  err))    
