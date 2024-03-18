# Blockly fork

これは Google の Blockly ビジュアル プログラミング エディターのフォークです: https://github.com/google/blockly

次の機能が追加されます:  

* Arduinoコード生成
* Arduino固有のブロック
* 複数のArduinoボードのサポート
* 静的型付け
* コードの警告
* Arduino ピン追跡
* Arduino ジェネレーター単体テスト (未完了)
* Arduinoのsetup()およびloop()関数を含むように変更
* 引数を追加するプロシージャのミューテイタを一時的に削除
* より鮮やかな色を得るために、わずかに高いHSV色相カラー値を採用
* ズームアイコンの位置に視覚的な小さな変更
* これらすべての変更を含むようにビルド構成を追加
  
次の機能がアップストリームにプッシュされる予定です (PR が承認されるとリストが更新されます) :

* window.prompt の使用を、非同期HTMLバージョンに簡単に置き換えることができる変更

他のすべての変更と修正は、上流のマスター ブランチに含めるために元の Blockly リポジトリに送信されています。

このフォークは、最新の状態に維持するために頻繁にアップストリーム プルを取得します。

> [!NOTE]
> 最終のマージ記録は 421fdf8fea2938d562107373da68623f8e1cba6b (2016/5/23)  です。  
> コミットの記録は
> ```
> blockly upstream up to commit 493fa91bdc7389e5cf173b74f59c297125718b53  
> 21st May 2016 "Merge pull request #376 from google/revert-371-proxy"  
> https://github.com/google/blockly/commit/493fa91bdc7389e5cf173b74f59c297125718b53
> ```

## Git configuration

このフォークは Git サブツリーとして構成されています。これは、すべての最新機能をアップストリームから取得し、Ardublockly の追加機能を引き続き動作できるようにするために行われます。


### Pulling from upstream

Blockly リポジトリをリモートとして追加し、最新のものを取得します :

```
git remote add -f blockly https://github.com/google/blockly.git
```

Blockly マスターからプロジェクトのルート ディレクトリから取得します :

```
git fetch blockly master
git subtree pull --prefix blockly blockly master
```

すべての変更を 1 つのコミットにプルするには、フラグ `---squashed` を `subtree pull` コマンドに追加します.

次に、競合を解決してオリジンにプッシュします.

> [!TIP]
> 最新版とはバージョンが違いすぎてまともにマージできません。  
> いくつか手動でマージしてみましたが、必要性に疑問があります…

## Blockly

Google の Blockly は、Web ベースのビジュアル プログラミング エディターです。 ユーザーはドラッグできます。  
ブロックを組み合わせてプログラムを構築します。 すべてのコードは無料でオープンソースです。  

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/sample.png)
