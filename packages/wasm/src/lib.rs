use wasm_bindgen::prelude::wasm_bindgen;

// 使用 #[wasm_bindgen] 宏来导出函数到 JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// FFI,导入JS函数到rust
#[wasm_bindgen]
extern "C" {
    fn alert(message: &str);
}
