#![feature(proc_macro, wasm_custom_section, wasm_import_module)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct World {
    entities: Vec<String>,
}

#[wasm_bindgen]
impl World {
    #[wasm_bindgen(constructor)]
    pub fn new() -> World {
        World {
            entities: Vec::new()
        }
    }

    pub fn insert(&mut self, item: String) {
        self.entities.push(item)
    }

    pub fn list(&mut self) -> Vec<JsValue> {
        self.entities
            .iter()
            .map(|i| JsValue::from(i.as_str()))
            .collect()
    }
}
