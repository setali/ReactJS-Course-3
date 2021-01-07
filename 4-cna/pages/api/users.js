
const users = [
  {id: 1, name: 'Ali'},
  {id: 2, name: 'Eli'},
  {id: 3, name: 'Qoli'},
  {id: 4, name: 'Mahtab'},
]


export default function (request, response) {
  response.statusCode = 500
  // response.json(users)
  response.send('<div><a href="https://www.google.com">salam</a></div>')
}