import { World, wasmBooted } from './lib.rs'

const output = document.getElementById('output')

const run = () => {
  const world = new World()

  world.insert(16)
  world.insert(16)
  world.insert(16)
  world.insert(16)

  return world.list()
}

const print = (result) => {
  output.innerText = JSON.stringify(result, null, '\t')
}

wasmBooted
  .then(run)
  .catch(e => e.message)
  .then(print)
