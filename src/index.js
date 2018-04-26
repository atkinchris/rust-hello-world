import { hello_world, wasmBooted } from './lib.rs'

const output = document.getElementById('output')

const print = () => {
  const message = hello_world('Chris', 'A')

  output.innerText = message
}

wasmBooted
  .then(print)
  .catch(console.error)
