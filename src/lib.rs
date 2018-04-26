#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub extern fn hello_world(mut first_name: &str, mut last_name: &str) -> String {
    // This is fairly silly code but it is just an example...
    if first_name.is_empty() {
        first_name = "John";
    }
    if last_name.is_empty() {
        last_name = "Doe";
    }
    format!("Hello, {} {}!", first_name, last_name)
}

#[wasm_bindgen]
pub fn get_array() -> Vec<JsValue> {
    vec![
        JsValue::from(1),
        JsValue::from(2),
        JsValue::from(3),
        JsValue::from(4),
        JsValue::from(5),
        JsValue::from_str("Chris"),
    ]
}
