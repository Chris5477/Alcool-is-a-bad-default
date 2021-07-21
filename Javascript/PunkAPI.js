import { HTML } from "./const.js"

export const getDataBeer = async() => {
    const response = await fetch("https://api.punkapi.com/v2/beers/random")
    const data = await response.json()
    HTML.nameTitle.textContent=`${data[0].name}`
    HTML.imgData.setAttribute("src", data[0].image_url)
    HTML.description.textContent=data[0].description

}




