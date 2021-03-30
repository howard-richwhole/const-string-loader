## 📖 初始化
```sh
npm ci
```

## ⚗️使用
> rule.js 需要回傳 object

設定
```js
    module: {
        rules: [
            {
                use: [
                    {
                        loader: path.resolve('./loader/main.js'),
                    },
                ],
            },
        ],
    },
```

編譯
```sh
npx webpack
```

## 🧾 檔案用途

檔名 | 用途            
---:| ---
`loader/` | 主要loader資料夾
`test_target/` | 編譯測試目標
`webpack.config.js` | webpack 設定檔
