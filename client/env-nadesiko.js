const dotenv = require("dotenv");
dotenv.config();

const pluginEnv = {
    "meta": {
        "type": "const",
        "value": {
            "pluginName": "env-nadesiko",
            "description": "環境変数を読み込む",
            "pluginVersion": "1.0.0",
            "nakoRuntime": ["wnako"],
            "nakoVersion": "3.6.15"
        }
    },
    // 環境変数取得
    "env取得": {
        "type": "func",
        "josi": [["の"]],
        "fn": function(key) {
            return process.env[key];
        }
    }
}

// なでしこにプラグインを登録
module.exports = pluginEnv; 