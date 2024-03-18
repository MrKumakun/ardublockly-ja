# Ardublockly package
このパッケージ フォルダーには、Ardublockly デスクトップ アプリケーションをビルドしてパッケージ化するために必要な 3 つのコンポーネントが含まれています :

* Ardublocklyをデスクトップアプリケーションとして使用するための[Electron][1]プロジェクト
* Ardublocklyをビルドしてスタンドアロンの実行可能ファイルにパッケージ化するために必要なPythonスクリプト
* ドキュメントを含むGitサブモジュール (Ardublockly GitHub Wiki に保存)
 
完全なビルド手順は、Ardublockly GitHub Wiki の記事 [Building-Ardublockly][2] にあります。  

ビルド出力は、Arduino IDE を持っていること以外に依存関係なしで配布できます。

## パッケージ化された Ardublockly をダウンロードする
Windows、Linux、および Mac OS X の安定したバイナリは、[リポジトリ リリース][1] の一部として GitHub でホストされています。  

開発ビルドは、git コミットごとに CI ビルド サーバーでトリガーされ、次のリンクでホストされます。

| Linux build         | Windows build       | Mac OS X build       |
|:-------------------:|:-------------------:|:--------------------:|
| [![Linux Build Status](https://circleci.com/gh/carlosperate/ardublockly/tree/master.svg?style=svg)](https://circleci.com/gh/carlosperate/ardublockly/tree/master) | [![Windows Build status](https://ci.appveyor.com/api/projects/status/t877g920hdiifc2i?svg=true)](https://ci.appveyor.com/project/carlosperate/ardublockly) | [![Mac Build Status](https://travis-ci.org/carlosperate/ardublockly.svg?branch=master)](https://travis-ci.org/carlosperate/ardublockly) |
| [Download Link][11] | [Download Link][12] | [Download Link][13]  |


[1]: https://electron.atom.io
[2]: https://github.com/carlosperate/ardublockly/wiki/Building-Ardublockly
[11]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
