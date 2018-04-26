default:
	make build
	yarn
	yarn build

start:
	make build
	yarn start

build:
	cargo build --release --target wasm32-unknown-unknown

watch:
	cargo watch -x 'build --target wasm32-unknown-unknown'

build-lib:
	mkdir -p lib
	cargo build --release --target wasm32-unknown-unknown
	wasm-bindgen target/wasm32-unknown-unknown/release/engine.wasm --out-dir lib
	wasm2es6js --base64 -o lib/engine_bg.js lib/engine_bg.wasm
	rm lib/*.wasm

bootstrap:
	rustup toolchain install nightly
	rustup default nightly
	rustup target add wasm32-unknown-unknown
	rustup component add rls-preview rust-analysis rust-src
	cargo install wasm-gc
