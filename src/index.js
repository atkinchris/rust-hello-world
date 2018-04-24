const wasm = import('../lib/rust_game.js')

wasm.then((js) => {
  js.greet('World!')
})
