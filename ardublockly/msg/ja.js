var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "日本語",
  title: "Ardublockly",
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
  defaultIdeButton: "[ja]Default IDE Button",
  defaultIdeButtonDefault: "[ja]IDE options unknown",
  language: "言語",
  languageDefault: "言語が不明",
  sketchName: "スケッチの名前",
  /* Arduino console output */
  arduinoOpMainTitle: "[ja]Arduino IDE output",
  arduinoOpWaiting: "[ja]Waiting for the IDE output...",
  arduinoOpUploadedTitle: "[ja]Successfully Uploaded Sketch",
  arduinoOpVerifiedTitle: "[ja]Successfully Verified Sketch",
  arduinoOpOpenedTitle: "[ja]Sketch opened in IDE",
  arduinoOpOpenedBody: "[ja]The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorUpVerTitle: "[ja]Build or Upload failed",
  arduinoOpErrorSketchTitle: "[ja]Sketch not found",
  arduinoOpErrorFlagTitle: "[ja]Invalid command line argument",
  arduinoOpErrorFlagPrefTitle: "[ja]Preference passed to 'get-pref' flag does not exist",
  arduinoOpErrorIdeDirTitle: "[ja]Unable to find Arduino IDE",
  arduinoOpErrorIdeDirBody: "[ja]The compiler directory has not been set.<br>" +
                            "[ja]Please set it in the Settings.",
  arduinoOpErrorIdeOptionTitle: "[ja]What should we do with the Sketch?",
  arduinoOpErrorIdeOptionBody: "[ja]The launch IDE option has not been set.<br>" +
                               "[ja]Please select an IDE option in the Settings.",
  arduinoOpErrorIdePortTitle: "[ja]Serial Port unavailable",
  arduinoOpErrorIdePortBody: "[ja]The Serial Port is not accessible.<br>" +
                             "[ja]Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdeBoardTitle: "[ja]Unknown Arduino Board",
  arduinoOpErrorIdeBoardBody: "[ja]The Arduino Board has not been set.<br>" +
                              "[ja]Please select the appropriate Arduino Board from the settings.",
  /* Modals */
  noServerTitle: "[ja]Ardublockly app not running",
  noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "[ja]If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "[ja]Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "[ja]Load new blocks?",
  loadNewBlocksBody: "[ja]Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "[ja]Are you sure you want to proceed?",
  discardBlocksTitle: "[ja]Delete blocks?",
  discardBlocksBody: "[ja]There are %1 blocks on the workspace.<br>" +
                     "[ja]Are you sure you want to delete them?",
  invalidXmlTitle: "[ja]Invalid XML",
  invalidXmlBody: "[ja]The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  /* Tooltips */
  uploadingSketch: "[ja]Uploading Sketch into Arduino...",
  uploadSketch: "[ja]Upload Sketch to the Arduino",
  verifyingSketch: "[ja]Verifying Sketch...",
  verifySketch: "[ja]Verify the Sketch",
  openingSketch: "[ja]Opening Sketch in the Arduino IDE...",
  openSketch: "[ja]Open Sketch in IDE",
  notImplemented: "[ja]Function not yet implemented",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "キャンセル",
  return: "戻る",
  /* Cards */
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catLogic: "論理",
  catLoops: "繰返し",
  catMath: "数字",
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
