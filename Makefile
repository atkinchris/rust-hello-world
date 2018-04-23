run:
	cargo +nightly run

build:
	cargo +nightly build

release:
	cargo +nightly build --release

bootstrap:
	rustup component add rls-preview rust-analysis rust-src
