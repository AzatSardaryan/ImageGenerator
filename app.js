const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")
const getImages = async () => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt : inputElement.value, 
            n : 2, 
            size : "1024x1024"
        })
    }
    
    try 
    {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)
        const data = await response.json()
        console.log(data)
        data?.data.forEach(imageObject => {
            const imageContainier = document.createElement('div')
            imageContainier.classList.add('image-contanier')
            const imageElement = document.createElement('image')
            imageElement.setAttribute('src', imageObject.url)
            imageContainier.append(imageElement)
            imageSection.append(imageContainier)
        })

    } 
    catch(err) 
    {
        console.error(err)
    }
}

submitIcon.addEventListener('click', getImages)