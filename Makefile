serve:
	make release
	yarn start

run:
	cargo run

build:
	cargo build --target wasm32-unknown-unknown

release:
	mkdir -p lib
	cargo build --release --target wasm32-unknown-unknown
	wasm-bindgen target/wasm32-unknown-unknown/debug/rust_game.wasm --out-dir lib

bootstrap:
	rustup toolchain install nightly
	rustup default nightly
	rustup target add wasm32-unknown-unknown
	rustup component add rls-preview rust-analysis rust-src
	cargo install wasm-bindgen-cli
