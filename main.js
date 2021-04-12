const dog = document.querySelector('.dog-btn')

dog.addEventListener('click', () => {
    //grab url for api request
    const dogUrl = 'https://dog.ceo/api/breeds/image/random'
    //grab img element you want to append to
    const dogImg = document.querySelector('.dogs')

    fetch(dogUrl)
    .then((data) => data.json())
    .then(data => dogImg.src = data.message)
    .catch(err => console.log(err))
})

//query weather btn
const weatherBtn = document.querySelector('.weather-btn')

weatherBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const weatherInput = document.querySelector('.weather-input').value
    const weatherUrl = `https://goweather.herokuapp.com/weather/${weatherInput}`

    fetch(weatherUrl)
        //convert data to Json
        .then((data) => data.json())

        //grab stringified version of data object
        .then((data) => {
            console.log(data)

            // //query the containers to append values
            const temp = document.querySelector('.temperature')
            const wind = document.querySelector('.wind')
            const description = document.querySelector('.description')
            const weatherContainer = document.querySelector('.form-container')

            //add data to inner text of card
            temp.innerText = data.temperature
            wind.innerText = data.wind
            description.innerText = data.description

            // remove current weather class helper function
            const remove = () => weatherContainer.classList.remove('sunny', 'cloudy', 'rain')
            
            // // //check weather and add background
            if (data.description.toLowerCase().includes('sunny')) {
                remove()
                weatherContainer.classList.add('sunny')
            }
            if (data.description.toLowerCase().includes('cloudy')) {
                remove()
                weatherContainer.classList.add('cloudy')
            }
            if (data.description.toLowerCase().includes('rain')) {
                remove()
                weatherContainer.classList.add('rain')
            }
    })
})

//advice section
const advice = document.querySelector('.advice-btn')

advice.addEventListener('click', () => {
    const adviceUrl = 'https://api.adviceslip.com/advice'

    fetch(adviceUrl)
        .then(data => data.json())
        .then(data => {
            console.log(data.slip.advice)
            const post = data.slip.advice
            const adviceWrapper = document.querySelector('.advice-wrapper')
            adviceWrapper.innerText = post
    })
})
