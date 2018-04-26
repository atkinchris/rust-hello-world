default:
	make build
	yarn
	yarn build

start:
	make build
	yarn start

build:
	cargo build --release --target wasm32-unknown-unknown

release:
	cargo build --release --target wasm32-unknown-unknown
	wasm-bindgen target/wasm32-unknown-unknown/release/engine.wasm --out-dir target
	wasm2es6js --base64 -o target/engine_bg.js target/engine_bg.wasm
	rm target/*.wasm

bootstrap:
	rustup toolchain install nightly
	rustup default nightly
	rustup target add wasm32-unknown-unknown
	rustup component add rls-preview rust-analysis rust-src
	cargo install wasm-gc
