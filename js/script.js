const ul = document.querySelector("ul.list")

for(let i = 0; i <= 100; i++) {
    if(i%3 === 0 && i%5 === 0) {
        const element = `<li class="name" style="color: red">FizzBUzz</li>`
        ul.innerHTML += element
        // console.log('FizzBUzz')
    } else if(i%3 === 0) {
        const element = `<li class="name" style="color: blue">Fizz</li>`
        ul.innerHTML += element
        // console.log('Fizz')
    } else if(i%5 === 0) {
        const element = `<li class="name" style="color: green">Buzz</li>`
        ul.innerHTML += element
        // console.log('Buzz')
    } else {
        const element = `<li class="name">${i}</li>`
        ul.innerHTML += element
        // console.log(i)
    }
}