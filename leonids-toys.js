const toys = [
    {
    id: 1,
    name: "Rubicks Cube",
    price: 10.99,
    ageLimit: 5,
    material: "plastic",
    hazards: "choking hazard: small parts",
    quantity: 100,
    inStock: true
},

    {
    id: 2,
    name: "Batman",
    price: 20,
    ageLimit: 5, 
    material: "plastic",
    hazards: "choking hazard: small parts",
    quantity: 35,
    inStock: true
},

{   
    id: 3,
    name: "Fidget Spinner",
    price: 5,
    ageLimit: 5,
    material: "plastic",
    hazards: "choking hazard: small parts",
    quantity: 0,
    inStock: false
}
]




const superMan = {
    id: 4,
    name: "Super Man",
    price: 20,
    ageLimit: 3,
    material: "plastic",
    hazards: "choking hazard: small parts",
    quantity: 900,
    inStock: true
};

const monopoly = {
    id: 5,
    name: "Monopoly",
    price: 20,
    ageLimit: 8,
    material: "plastic",
    hazards: "choking hazard: small parts",
    quantity: 35,
    inStock: true
};


toys.push(superMan)
toys.push(monopoly)

const stuffedAnimal = {
    name: "Teddy Bear",
    price: 15,
    agelimit: 0,
    material: "fur",
    hazards: "none",
    quantity: 1000,
    inStock: true
}

const addToyToInventory = (teddyBear) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    teddyBear.id = idForNewToy
    toys.push(teddyBear)
}


    addToyToInventory(stuffedAnimal)
    for (const toy of toys) {
        console.log(`The ${toy.name} weighs ${toy.weight} and costs $${toy.price}.`)
    }



console.log(toys)


for (toy of toys) {
        toy.weight = (Math.floor(Math.random()*10)) + 0.4
        toy.price = toy.price * .05 + toy.price
        console.log(`The ${toy.name} weighs ${toy.weight} and costs $${toy.price}.`)
    }


