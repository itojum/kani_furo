// Ambientライブラリを読み込む
const ambient = require('ambient-lib');

const pluginAmbient = {
    "meta": {
        "type": "const",
        "value": {
            "pluginName": "ambient-nadesiko",
            "description": "Ambientライブラリを読み込む",
            "pluginVersion": "1.0.0",
            "nakoRuntime": ["wnako"],
            "nakoVersion": "3.6.15"
        }
    },
    // Ambientへ接続
    "Amibient接続": {
        "type": "func",
        "josi": [["と"], ["で"]],
        "fn": function(channelId, writeKey) {
            ambient.connect(channelId, writeKey);
        }
    },
    // データ送信
    "Ambient送信": {
        "type": "func",
        "josi": [["を"]],
        "fn": function(data) {
            ambient.send(data, function (err, res) {
                if (err) {
                  console.log(err);
                }
            });
        }
    }
}

// なでしこにプラグインを登録
module.exports = pluginAmbient; 