import { hello_world, wasmBooted } from './lib.rs'

wasmBooted
  .then(() => console.log(hello_world('chris')))
  .catch(console.error)
