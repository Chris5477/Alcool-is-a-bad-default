import { HTML } from "./const.js";
import { showWhichPAgeCurrent } from "./function.js";
let i = 0;
export let numberPage = 1
let dataApi = null




export const getDataBeer = async(index) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers?page=${index}`);
  const data = await response.json();
  return data
};  

 dataApi = await getDataBeer(numberPage)



const aaa = async() => {
  if(dataApi === undefined){
    clearInterval(delayDisplay)
  }
 if(i < dataApi.length){
   HTML.nameTitle.textContent = `${dataApi[i].name}`
   HTML.imgData.setAttribute("src", dataApi[i].image_url)
   HTML.imgData.setAttribute("alt", "Beer")
   HTML.description.textContent = dataApi[i].description 
   i++
  }else{
    numberPage = numberPage + 1
    dataApi = await getDataBeer(numberPage)
    showWhichPAgeCurrent(numberPage)
    i = 0
  }
}
  
const delayDisplay = setInterval( () => aaa(), 2000)




