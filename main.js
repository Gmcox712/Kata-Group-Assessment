// Group Members = Melissa, Shari, Javier, Giovanni

const mainElement = document.querySelector('body')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];


const kata1heading = document.createElement('h1')
const kata1answer = document.createElement('div')
mainElement.append(kata1heading)
mainElement.append(kata1answer)
kata1heading.append('Kata 1')

let counter1 = 1
while (counter1 <= 20) {
    kata1answer.append(counter1 + ', ')
    counter1 += 1
}

const kata2heading = document.createElement('h1')
const kata2answer = document.createElement('div')
mainElement.append(kata2heading)
mainElement.append(kata2answer)
kata2heading.append('Kata 2')

let counter2 = 0
while (counter2 <= 20) {
    kata2answer.append(counter2 + ', ')
    counter2 += 2
}

const kata3head = document.createElement('h1')
const kata3answer = document.createElement('div')
mainElement.append(kata3head)
mainElement.append(kata3answer)
kata3head.append('Kata 3')

    let counter3 = 1
while (counter3 <= 20) {
    kata3answer.append(counter3 + ', ')
    counter3 += 2
}

const kata4heading = document.createElement('h1')
const kata4answer = document.createElement('div')
mainElement.append(kata4heading)
mainElement.append(kata4answer)
kata4heading.append('Kata 4')

    let counter4 = 5
while (counter4 <= 100) {
    kata4answer.append(counter4 + ', ')
    counter4 += 5
}

const kata5heading = document.createElement('h1')
const kata5answer = document.createElement('div')
mainElement.append(kata5heading)
mainElement.append(kata5answer)
kata5heading.append('Kata 5')

    let counter5 = 1
while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare) {
        kata5answer.append(counter5 + ', ')
    }
    counter5 += 1
    
}

const kata6heading = document.createElement('h1')
const kata6answer = document.createElement('div')
mainElement.append(kata6heading)
mainElement.append(kata6answer)
kata6heading.append('Kata 6')

    let counter6 = 20
while (counter6 >= 0) {
    kata6answer.append(counter6 + ', ')
    counter6 -= 1
}

const kata7heading = document.createElement('h1')
const kata7answer = document.createElement('div')
mainElement.append(kata7heading)
mainElement.append(kata7answer)
kata7heading.append('Kata 7')

    let counter7 = 20
while (counter7 >= 0) {
    kata7answer.append(counter7 + ', ')
    counter7 -= 2
}

const kata8heading = document.createElement('h1')
const kata8answer = document.createElement('div')
mainElement.append(kata8heading)
mainElement.append(kata8answer)
kata8heading.append('Kata 8')

    let counter8 = 19
while (counter8 >= 0) {
    kata8answer.append(counter8 + ', ')
    counter8 -= 2
}

const kata9heading = document.createElement('h1')
const kata9answer = document.createElement('div')
mainElement.append(kata9heading)
mainElement.append(kata9answer)
kata9heading.append('Kata 9')

    let counter9 = 100
while (counter9 >= 0) {
    kata9answer.append(counter9 + ', ')
    counter9 -= 5
    
}

const kata10heading = document.createElement('h1')
const kata10answer = document.createElement('div')
mainElement.append(kata10heading)
mainElement.append(kata10answer)
kata10heading.append('Kata 10')

    let counter10 = 100
while (counter10 >= 0) {
    const isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
        kata10answer.append(counter10 + ', ')
     }
    counter10 -= 1
    
}

const kata11heading = document.createElement('h1')
const kata11answer = document.createElement('div')
mainElement.append(kata11heading)
mainElement.append(kata11answer)
kata11heading.append('Kata 11')
    for (let i = 0; i < sampleArray.length; i++) {
        kata11answer.append(sampleArray[i] + ', ')
    }

const kata12heading = document.createElement('h1')
const kata12answer = document.createElement('div')
mainElement.append(kata12heading)
mainElement.append(kata12answer)
kata12heading.append('Kata 12')
        for (let index = 0; index < sampleArray.length; index++) {
            if ((sampleArray[index] % 2) != 1) {
                kata12answer.append(sampleArray[index] + ', ')
            }
        }

const kata13heading = document.createElement('h1')
const kata13answer = document.createElement('div')
mainElement.append(kata13heading)
mainElement.append(kata13answer)
kata13heading.append('Kata 13')
        for (let index = 0; index < sampleArray.length; index++) {
            if ((sampleArray[index] % 2) != 0) {
                kata13answer.append(sampleArray[index] + ', ')
            }
        }

const kata14heading = document.createElement('h1')
const kata14answer = document.createElement('div')
mainElement.append(kata14heading)
mainElement.append(kata14answer)
kata14heading.append('Kata 14')
let squared = 0
      for (let index = 0; index < sampleArray.length; index++) {
        squared = sampleArray[index] * sampleArray[index]
        kata14answer.append(squared + ', ')
        }
const kata15heading = document.createElement('h1')
const kata15answer = document.createElement('div')
mainElement.append(kata15heading)
mainElement.append(kata15answer)
kata15heading.append('Kata 15')
let sumof20 = 0
        for (let index = 0; index <= 20; index++) {        
            sumof20 += index
        }
        kata15answer.append(sumof20 + '. ')

const kata16heading = document.createElement('h1')
const kata16answer = document.createElement('div')
mainElement.append(kata16heading)
mainElement.append(kata16answer)
kata16heading.append('Kata 16')
let sumofarray = 0
        for (let index = 0; index < sampleArray.length; index++) {        
            sumofarray += sampleArray[index]
        }
        kata16answer.append(sumofarray + '. ')
        
const kata17heading = document.createElement('h1')
const kata17answer = document.createElement('div')
mainElement.append(kata17heading)
mainElement.append(kata17answer)
kata17heading.append('Kata 17')
    for (let index = 0; index < sampleArray.length; index++) {
    }
    kata17answer.append(sampleArray[7] + '. ')

const kata18heading = document.createElement('h1')
const kata18answer = document.createElement('div')
mainElement.append(kata18heading)
mainElement.append(kata18answer)
kata18heading.append('Kata 18')
    for (let index = 0; index < sampleArray.length; index++) {
    }
    kata18answer.append(sampleArray[18] + '. ')