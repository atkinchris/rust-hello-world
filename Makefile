build:
	cargo build --target wasm32-unknown-unknown

bootstrap:
	rustup toolchain install nightly
	rustup default nightly
	rustup target add wasm32-unknown-unknown
	rustup component add rls-preview rust-analysis rust-src
	cargo install wasm-gc
