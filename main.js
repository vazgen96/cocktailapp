//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)



function getDrink() {
    
    if(document.querySelector('section')) {
        document.querySelector('section').remove()
    }

    const container = document.createElement('section')
    document.querySelector('body').appendChild(container)
    
    let value = document.querySelector('input').value

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(let i = 0; i < data.drinks.length; i++) {
                document.querySelector(container.tagName.toLowerCase()).appendChild(getDrinkName(data.drinks[i].strDrink))
                document.querySelector(container.tagName.toLowerCase()).appendChild(getDrinkImage(data.drinks[i].strDrinkThumb))
                document.querySelector(container.tagName.toLowerCase()).appendChild(getInstructions(data.drinks[i].strInstructions))

            }
            document.querySelector('input').value = ''
    })
        .catch(err => {
            console.log(`error: ${err}`)
    })
}

function getDrinkName(drink) {
    let h2 = document.createElement('h2')
    h2.innerText = drink
    return h2
}

function getDrinkImage(drinkImage) {
    let img = document.createElement('img')
    img.src = drinkImage
    return img
}

function getInstructions(instructions) {
    let h3 = document.createElement('h3')
    h3.innerText = instructions
    return h3
}