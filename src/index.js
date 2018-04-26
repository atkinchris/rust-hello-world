import { get_array, wasmBooted } from './lib.rs'

const output = document.getElementById('output')

const run = () => get_array()
const print = (result) => { output.innerText = JSON.stringify(result) }

wasmBooted
  .then(run)
  .catch(e => e.message)
  .then(print)
