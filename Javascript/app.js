import { getDataBeer, numberPage } from "./PunkAPI.js";

getDataBeer(numberPage)
.catch(err => console.log( "La requête a échoué ! Voici l'erreur : " +  err))  