use pest::Parser;
use pest_derive::Parser;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[derive(Parser)]
#[grammar = "parser/dsl-grammar.pest"]
struct JsonParser;

#[wasm_bindgen(js_name = "parserJson")]
pub fn parser_json(input: &str) -> Result<String, JsValue> {
    let parsed =
        JsonParser::parse(Rule::value, input).map_err(|e| JsValue::from_str(&e.to_string()))?;
    // 将解析结果转换为 JSON 字符串（示例）
    Ok(parsed.to_string())
}
