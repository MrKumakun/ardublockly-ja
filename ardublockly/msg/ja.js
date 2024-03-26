var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "日本語",
  title: "Ardublockly 日本語",
  blocks: "Blocks",
  /* Menu */
  open: "開く",
  save: "保存",
  deleteAll: "すべて削除  ",
  settings: "設定",
  documentation: "ドキュメント",
  reportBug: "不具合報告",
  examples: "サンプル",
  /* Settings */
  compilerLocation: "コンパイラの場所",
  compilerLocationDefault: "コンパイラが見つかりません",
  sketchFolder: "スケッチのフォルダ",
  sketchFolderDefault: "スケッチのフォルダが見つかりません",
  arduinoBoard: "Arduinoの種類",
  arduinoBoardDefault: "Arduinoの種類が不明",
  comPort: "COMポート番号",
  comPortDefault: "ポート番号が不明",
  defaultIdeButton: "IDEボタンの動作",
  defaultIdeButtonDefault: "IDEのオプションが未設定",
  language: "言語",
  languageDefault: "言語が不明",
  sketchName: "スケッチの名前",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE 出力",
  arduinoOpWaiting: "IDEからの出力を待っています....",
  arduinoOpUploadedTitle: "スケッチが正常にアップロードされました",
  arduinoOpVerifiedTitle: "スケッチの検証が正常に完了しました",
  arduinoOpOpenedTitle: "スケッチをIDEで開く",
  arduinoOpOpenedBody: "スケッチはArduino IDEにロードする必要があります",
  arduinoOpErrorUpVerTitle: "ビルドもしくはアップロードに失敗しました",
  arduinoOpErrorSketchTitle: "スケッチが見つかりません",
  arduinoOpErrorFlagTitle: "無効なコマンドライン引数です",
  arduinoOpErrorFlagPrefTitle: "プリファレンス'--get-pref'フラグの設定が見つかりません",
  arduinoOpErrorIdeDirTitle: "Arduino IDEが見つかりません",
  arduinoOpErrorIdeDirBody: "コンパイラのディレクトリが設定されていません<br>" +
                            "設定を確認してください",
  arduinoOpErrorIdeOptionTitle: "スケッチをどうしますか?",
  arduinoOpErrorIdeOptionBody: "IDEの起動オプションが設定されていません<br>" +
                               "IDEの設定を確認してください",
  arduinoOpErrorIdePortTitle: "シリアルポートが利用できません",
  arduinoOpErrorIdePortBody: "シリアルポートにはアクセスできません<br>" +
                             "PCが正しくArduinoを認識しているか確認し、接続されているシリアルポート番号を指定してください",
  arduinoOpErrorIdeBoardTitle: "Arduinoの種類が不明です",
  arduinoOpErrorIdeBoardBody: "使用するArduinoボードは設定されていません<br>" +
                              "設定から適切なArduinoボードを選択してください",
  /* Modals */
  noServerTitle: "Ardublocklyが実行されていません",
  noServerTitleBody: "<p>すべてのArdublockly機能を有効にするためには、ローカルのコンピューターで実行されている必要があります。</p>" +
                     "<p>インターネット経由のオンラインバージョンを使用している場合、設定を構成したり、コードをArduinoにロードしたりすることはできません。</p>" +
                     "<p>インストール方法については、<a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository (英語)</a>を参照してください。</a>.</p>" +
                     "<p>もし、既にインストールされている場合は、アプリケーションが正しく実行されていることを確認してください。</p>",
  noServerNoLangBody: "Ardublocklyアプリケーションが実行されていない場合、言語の変更ができません",
  addBlocksTitle: "Additional Blocks 日本語",
  /* Alerts */
  loadNewBlocksTitle: "新しいブロックをロードしますか?",
  loadNewBlocksBody: "新しいXMLファイルをロードすると、ワークスペースから現在のブロックが削除され、置き換えられます。<br>" +
                     "ロードして大丈夫ですか？",
  discardBlocksTitle: "ブロックを削除しますか？",
  discardBlocksBody: "ワークスペースには %1 ブロックがあります。<br>" +
                     "削除しても問題ないですか？",
  invalidXmlTitle: "無効なXMLです",
  invalidXmlBody: "XMLファイルは正常に解析されませんでした。XMLコードを確認して、再試行してください。",
  /* Tooltips */
  uploadingSketch: "スケッチをArduinoにアップロード中...",
  uploadSketch: "Arduinoにアップロードが完了",
  verifyingSketch: "スケッチの検証中...",
  verifySketch: "スケッチの確認完了",
  openingSketch: "Arduino IDEでスケッチを開いています...",
  openSketch: "IDEでスケッチを開く",
  notImplemented: "未実装項目です",
  /* Prompts */
  ok: "OK",
  okay: "はい",
  cancel: "キャンセル",
  return: "戻る",
  /* Cards */
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catLogic: "演算",
  catLoops: "繰返し",
  catMath: "数式",
  catText: "文字",
  catVariables: "変数",
  catFunctions: "関数",
  catInputOutput: "入力/出力",
  catTime: "時間",
  catAudio: "音声",
  catMotors: "動力",
  catComms: "通信",
  catInts: "割込み",
};
