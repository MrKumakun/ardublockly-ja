# Ardublockly Electron プロジェクト
クロスプラットフォームで実行可能なChromium(オープンソースのブラウザ)のウィンドウを生成し、そのうえで動作するArdublockly Electronプロジェクトです。

Electronは、JavaScript、HTML、およびCSSを使用したクロスプラットフォームデスクトップアプリケーションを構成するフレームワークです。 [io.js](http://iojs.org) と [Chromium](http://www.chromium.org) に基づいており、[Atom
editor](https://github.com/atom/atom) エディターで使用されています。

このプロジェクトは、 [Jakub Szwacz](https://github.com/szwacz) による優れた [electron-boilerplate](https://github.com/szwacz/electron-boilerplate) に基づいて作成されています。


## クイックスタート
このプロジェクトに必要な [Node.js](https://nodejs.org) をインストールしてください。

実行するには、Ardublocklyプロジェクトルートディレクトリからこれらのコマンドを実行します:  
(訳者注: バージョンが古く、そのままでは諸々と警告が出ます。またgulp関連で動作しませんので修正が必要です)

```
cd package/electron
npm install
npm start
```

これにより、ランタイムがダウンロードされ、2つの `package.json`（ `package/electron`、もう1つは `package/electron/app` ）からすべての依存関係のパッケージがインストールされます。


2024/3 追記:  
`gulp@3.9.1` のバージョンアップに伴うエラーと、クリティカルな脆弱性として `lodash` の問題が発生します。
正しい回避方法ではないかもしれませんが、行った対処のメモを残してきます。

### gulpのエラー問題:
```
[17:48:43] Requiring external module @babel/register
fs.js:35
} = primordials;
    ^

ReferenceError: primordials is not defined
    at fs.js:35:5
```
■ 原因:  
`graceful-fs` は、Nodeのバージョンに依存しており、gulp 3.9.x に対応したものが利用されていない。

■ 回避策:  
`graceful-fs` のバージョンを強制する。  
install コマンド後に生成される `package-lock.json` をエディタで開き、`resolutions` 以下の `"graceful-fs": "^?.?.?"` となっている項目すべてを `"graceful-fs": "^4.2.10"` にしてしまう。  
保存後に `npm install` を行うと再構成される。


### lodashの脆弱性問題:
■ 原因:  
バージョンが古すぎてクリティカルな脆弱性を抱えている。

■ 回避策:  
install コマンド後に生成される `package-lock.json` をエディタで開き、`resolutions` 以下の `"lodash": "^?.?.?"` となっている項目すべてを `"lodash": "^4.17.21"` にしてしまう。  
保存後に `npm install` を行うと再構成される。


## ビルド
再配布できるアプリケーションを構築するには、Ardublockly プロジェクトのルート ディレクトリからコマンドを使用します:

```
cd package/electron
npm run release
```

このコマンドを実行しているオペレーティング システムのパッケージ化プロセスが開始されます。配布の準備ができたファイルが `releases` ディレクトリに出力されます。  
(訳者注: `arduexec` フォルダに構築されます。 `releases` フォルダは空のままでした。原因調査中)


Windowsインストーラーは Windows上で実行している場合にのみ作成できます。これは Linux および OSX にも当てはまります。したがって、3つのインストーラーをすべて生成するには、3つのオペレーティング システムすべてが必要です。


## License

The original boilerplate by Jakub Szwacz is release under the following license. All modifications to the boilerplate code adhere to this license and are copyright of carlosperate.

The MIT License (MIT)

Copyright (c) 2015 Jakub Szwacz

Copyright (c) 2015 carlosperate https://github.com/carlosperate/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
