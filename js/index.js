

function* getNumber() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const generator = getNumber()

for (let number of generator) {
  console.log(number)
}


// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// function slideshow(slides) {
//
//   if (!slides) {
//     throw SyntaxError('Slides must be an array')
//   }
//
//   console.log('Hi')
//   // ...
//   // ...
//   // ...
//   // ...
// }


// function request (url, method = 'GET') {
//
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//
//     xhr.open(method, url)
//
//     xhr.send()
//
//     xhr.onload = function () {
//       resolve({
//         json: () => new Promise(resolve1 => {
//           resolve1(JSON.parse(xhr.response))
//         })
//       })
//     }
//     // xhr.onload = function () {
//     //   resolve({data: JSON.parse(xhr.response)})
//     // }
//   })
// }
//
// request('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))