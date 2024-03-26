# Ardublockly
`Ardublockly` は、Arduino向けのビジュアルプログラミングエディターです。このフォークは日本語に翻訳する作業を行っています。このシステムは Google's [Blockly][1], のフォークを利用しており、 [Arduino][15] のコードを生成する事ができます。

`ArdublocklyServer` は、[Arduino IDE][2] を利用してArduinoコードをコンパイル、およびターゲットにロードできるように、Pythonを利用してローカルサーバーを構築できます。

これらは、Windows、Mac OS X、および Linux で動作する自己完結型の実行可能デスクトップアプリケーションにパッケージ化されています。

![Ardublockly desktop program screenshot][desktop_screeshot]


## 特徴
* ブロックをドラッグ&＆ドロップして視覚的にArduinoコードを作成できます
* コードをArduinoボードにアップロードできます
* 便利な「コードブロック警告」
* 幅広い公式Arduinoボードと互換性があります
* Windows / Linux / Mac OS Xで動作します

Ardublocklyは、まだ開発中であり、いくつかの機能はまだ実装されていません。今後のToDoリストは [TODO.md][3] に記載されています。

現在、Windows では Python 2.7 および 3.4 を使用し、Linux および MacOS X では Python 2.7 でテストされています。

> [!TIP]
> ビルド情報: ベースとなるBlocklyは古いバージョンが使用されており、ビルドには 2.7 環境が必須です。サーバーは 3.9 以上では起動できません。~~また、Google Closure Library のバージョンも古く、一部、オンライン経由で実行される機能が失われています。その為、完全なビルドができません~~ →修正しました

> [!NOTE]
> 2024/3 メモ: Python 2.7 の環境で pip のアップグレードとvirtualenvのインストール  
> ```
> #
> # python2.7 pip upgrade and virtualenv install.
> #
> pip install ez-setup
> easy_install pip==20.3.4
> 
> pip install virtualenv
> python -m virtualenv .venv27
> ```
> Windowsの場合はパスを通しておくこと。  
> `SET PATH=%LOCALAPPDATA%\Python\Python27;%LOCALAPPDATA%\Python\Python27\Scripts;%PATH%`


## リポジトリのクローン時にはサブモジュールの初期化を忘れずに
リポジトリには初期化が必要なサブモジュールがあることに注意してください。Ardublocklyリポジトリを正しくクローンするには、

```
git clone https://github.com/carlosperate/ardublockly.git
cd ardublockly
git submodule update --init --recursive
```


## インストール
デスクトップアプリケーションは Windows / Mac / Linux で利用でき、[Ardublockly repository releases page][4] からスタンドアロンの実行可能ファイルをダウンロードしてください。

生成されたArduinoコードのビルドとモジュールへのアップロードには、[Arduino IDE バージョン 1.6.x 以降][2]も必要です。

#### 開発ビルド
GitHub リポジトリに更新が追加されるたびに自動的に生成される __UNSTABLE__ 開発ビルドをテストすることもできます。

> [!CAUTION]
> 訳者注: 現在は正常に稼働していない？

| Linux build         | Windows build       | Mac OS X build       |
|:-------------------:|:-------------------:|:--------------------:|
| [![Linux Build Status](https://circleci.com/gh/carlosperate/ardublockly/tree/master.svg?style=svg)](https://circleci.com/gh/carlosperate/ardublockly/tree/master) | [![Windows Build status](https://ci.appveyor.com/api/projects/status/t877g920hdiifc2i?svg=true)](https://ci.appveyor.com/project/carlosperate/ardublockly) | [![Mac Build Status](https://travis-ci.org/carlosperate/ardublockly.svg?branch=master)](https://travis-ci.org/carlosperate/ardublockly) |
| [Download Link][12] | [Download Link][13] | [Download Link][14]  |

#### "Core version" (Python サーバーのみ)
必要に応じて、ローカル ブラウザ (Chrome を推奨) に Web インターフェイスをロードする Python サーバーのみを実行して、コア ソフトウェアを使用することもできます。

このバージョンの完全なインストール手順は、[this Github repository Wiki][5] にあります。

簡単な起動方法としては、このリポジトリのクローンを作成し、すべてのサブモジュールを初期化して、

```
python start.py
```

これは、Python > 2.7 または > 3.4 を搭載した、 Windows、Linux (ARM を含む)、Mac OS X で動作します。

> [!TIP]
> 訳者注: Python の仕様変更に伴い < 3.8 であること。Windows 3.6.8 で動作確認済み


## 起動方法
1. [Ardublocklyをインストール][5].
2. [Arduino IDE][2] バージョン 1.6.x 以降をインストールします (常に最新バージョンを推奨します)。
3. インストール方法の定義に従って Ardublockly を実行します。
3. Ardublocklyの設定を開き、Arduino IDEのパスを設定します [following these instructions][6]。


## オンラインデモ
Ardublockly メイン インターフェイスの最新リリースのデモは、次の 2 つのリンクにあります (コードを Arduino にロードするには、完全な Ardublockly アプリケーションをダウンロードしてコンピュータで実行する必要があります)。

> [!TIP]
> 訳者注: リンク先は本家の英語版

#### [Ardublockly][10]
![WebApp screenshot responsive design][web_screenshot_responsive]

#### [Ardublockly classic][11]
![WebApp screenshot][web_screenshot_classic]


## 資料
インストール手順、構成手順、開発者情報などのドキュメントは、[Ardublockly GitHub リポジトリ Wiki][7] にあります。

ドキュメントをダウンロードするには、wikiデータを git clone します。

```
git clone https://github.com/carlosperate/ardublockly.wiki.git
```


## クレジット
このプロジェクトは [BlocklyDuino][16] からインスピレーションを受けています。

Blockly のオリジナル ソースは Google Inc. の著作権です [https://developers.google.com/blockly/][1]。 Blockly フォークへの変更のリストは、[Blockly subdirectory README][17] にあります。


## License
Copyright (c) 2016 carlosperate https://github.com/carlosperate/

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: https://github.com/MrKumakun/ardublockly-ja/assets/159548828/0b6b2ee7-0908-43b1-9867-8e4b9a9ab8b0
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
