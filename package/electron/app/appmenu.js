/**
 * @author    carlosperate
 * @copyright 2015 carlosperate https://github.com/carlosperate
 * @license   Licensed under the The MIT License (MIT), a copy can be found in
 *            the electron project directory LICENSE file.
 *
 * @fileoverview Generates the application menu bar.
 */
const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const shell = electron.shell;
const dialog = electron.dialog;
const MenuItem = electron.MenuItem;
const BrowserWindow = electron.BrowserWindow;

const server = require('./servermgr.js');

module.exports.setArdublocklyMenu = function(devMode) {
    if (typeof(devMode)==='undefined') devMode = false;

    var ardublocklyMenu = [];
    if (process.platform == 'darwin') {
        ardublocklyMenu.push(getMacMenuData());
    }
    ardublocklyMenu.push(getFileMenuData());
    ardublocklyMenu.push(getEditMenuData());
    ardublocklyMenu.push(getProgramMenuData());
    ardublocklyMenu.push(getExamplesMenuData());
    if (process.platform == 'darwin') {
        ardublocklyMenu.push(getWindowMenuData());
    }
    ardublocklyMenu.push(getHelpMenuData());

    if (devMode) {
        ardublocklyMenu.push(getDevMenuData());
    }

    Menu.setApplicationMenu(Menu.buildFromTemplate(ardublocklyMenu));
};

var getMacMenuData = function() {
    return {
        label: 'Ardublockly',
        submenu: [
            {
                label: 'About',
                click: functionNotImplemented
            }, {
                type: 'separator'
            }, {
                label: '環境設定',
                accelerator: 'CmdOrCtrl+,',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openSettings()');
                }
            }, {
                type: 'separator'
            }, {
                label: 'サービス',
                submenu: []
            }, {
                type: 'separator'
            }, {
                label: 'Ardublocklyを非表示',
                accelerator: 'Command+H',
                selector: 'hide:'
            }, {
                label: '他のアプリを非表示',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
            }, {
                label: 'すべて表示',
                selector: 'unhideAllApplications:'
            }, {
                type: 'separator'
            }, {
                label: '終了',
                accelerator: 'CmdOrCtrl+Q',
                click: function() {
                    app.quit();
                }
            }
        ]
    };
};

var getFileMenuData = function() {
    var fileMenu = {
        label: 'ファイル',
        submenu: [
            {
                label: '新規作成',
                accelerator: 'CmdOrCtrl+N',
                click: functionNotImplemented
            }, {
                label: '開く',
                accelerator: 'CmdOrCtrl+O',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadUserXmlFile()', true);
                }
            }, {
                label: 'ブロックを保存',
                accelerator: 'CmdOrCtrl+S',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.saveXmlFile()');
                }
            }, {
                label: 'スケッチを保存',
                accelerator: 'Shift+CmdOrCtrl+S',
                click:  function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.saveSketchFile()');
                }
            }
        ]
    };

    // On MacOS the Quit option is in the app menu, so only add it if not mac
    if (process.platform != 'darwin') {
        fileMenu.submenu.push(
            {
                type: 'separator'
            }, {
                label: '終了',
                accelerator: 'CmdOrCtrl+Q',
                click: function() {
                    app.quit();
                }
            }
        );
    }

    return fileMenu;
};

var getEditMenuData = function() {
    var editMenud = {
        label: '編集',
        submenu: [
            {
                label: '元に戻す',
                accelerator: 'CmdOrCtrl+Z',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.workspace.undo(false)');
                }
            }, {
                label: 'やり直し',
                accelerator: 'CmdOrCtrl+Y',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.workspace.undo(true)');
                }
            }, {
                type: 'separator'
            }, {
                label: '切り取り',
                accelerator: 'CmdOrCtrl+X',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyCut()');
                }
            }, {
                label: 'コピー',
                accelerator: 'CmdOrCtrl+C',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyCopy()');
                }
            }, {
                label: '貼り付け',
                accelerator: 'CmdOrCtrl+V',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyPaste()');
                }
            }, {
                label: '削除',
                accelerator: 'Delete',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.blocklyDelete()');
                }
            }, {
                label: 'すべて削除',
                accelerator: 'Delete',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.discardAllBlocks()');
                }
            }
        ]
    };

    // On MacOS Preferences is in the app menu, so only add it if not mac
    if (process.platform != 'darwin') {
        editMenud.submenu.push(
            {
                type: 'separator'
            }, {
                label: '環境設定',
                accelerator: 'CmdOrCtrl+,',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.openSettings()');
                }
            }
        );
    }

    return editMenud;
};

var getExamplesMenuData = function() {
    return {
        label: 'サンプル',
        submenu: [
            {
                label: 'Blinky',
                click: function() {
                     BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadServerXmlFile("../examples/' +
                            'blink.xml");');
                }
            }, {
                label: 'Serial Print',
                click: function() {
                     BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadServerXmlFile("../examples/' +
                            'serial_print_ascii.xml");');
                }
            }, {
                label: 'Serial Repeat Game',
                click: function() {
                     BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadServerXmlFile("../examples/' +
                            'serial_repeat_game.xml");');
                }
            }, {
                label: 'Servo Knob',
                click: function() {
                     BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadServerXmlFile("../examples/' +
                            'servo_knob.xml");');
                }
            }, {
                label: 'Stepper Knob',
                click: function() {
                     BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.loadServerXmlFile("../examples/' +
                            'stepper_knob.xml");');
                }
            }
        ]
    };
};

var getProgramMenuData = function() {
    return {
        label: 'プログラム',
        submenu: [
            {
                label: 'IDEでスケッチを開く',
                //accelerator: 'CmdOrCtrl+O',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendOpen()');
                }
            }, {
                label: '検証',
                accelerator: 'CmdOrCtrl+R',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendVerify()');
                }
            }, {
                label: 'プログラムの書き込み',
                accelerator: 'CmdOrCtrl+U',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript('Ardublockly.ideSendUpload()');
                }
            }
        ]
    };
};

var getWindowMenuData = function() {
    return {
        label: 'ウィンドウ',
        submenu: [
            {
                label: '最小化',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
            }, {
                label: '閉じる',
                accelerator: 'Command+W',
                selector: 'performClose:'
           }, {
                type: 'separator'
            }, {
                label: '最前面に表示',
                selector: 'arrangeInFront:'
            }
        ]
    };
};

var getHelpMenuData = function() {
    return {
        label: 'へルプ',
        submenu: [
            {
                label: 'クイックスタート',
                click: function() {
                    shell.openExternal(
                        'http://localhost:8000/docs/Quick-Start');
                }
            }, {
                label: 'マニュアル',
                click: function() {
                    shell.openExternal('http://localhost:8000/docs/');
                }
            }, {
                type: 'separator'
            }, {
                label: 'ウェブサイト',
                click: function() {
                    shell.openExternal('http://ardublockly.embeddedlog.com');
                }
            }, {
                label: 'ソースコード',
                click: function() {
                    shell.openExternal(
                        'https://github.com/carlosperate/ardublockly');
                }
            }, {
                label: '不具合報告',
                click: function() {
                    shell.openExternal(
                        'https://github.com/carlosperate/ardublockly/issues');
                }
            }, {
                type: 'separator'
            },  {
                label: 'Ardublockly について',
                click: function() {
                    shell.openExternal('http://localhost:8000/docs/About');
                }
            }
        ]
    };
};

var getDevMenuData = function() {
    return {
        label: '開発',
        submenu: [
            {
                label: 'リロード',
                accelerator: 'CmdOrCtrl+F5',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .reloadIgnoringCache();
                }
            }, {
                label: 'DevToolsの切り替え',
                accelerator: 'F12',
                click: function() {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }, {
                type: 'separator'
            }, {
                label: 'サーバーの停止',
                accelerator: 'Shift+CmdOrCtrl+S',
                click: server.stopServer
            }, {
                label: 'サーバーの再起動',
                accelerator: 'Shift+CmdOrCtrl+R',
                click: server.restartServer
            }, {
                type: 'separator'
            }, {
                label: 'サイドメニューを開く',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            '$(".button-collapse").sideNav("show")');
                }
            }, {
                label: 'ブロックメニューを開く',
                click: function() {
                    BrowserWindow.getFocusedWindow().webContents
                        .executeJavaScript(
                            'Ardublockly.openExtraCategoriesSelect()');
                }
            }, {
                type: 'separator'
            },  {
                label: 'テストメニュー',
                click: testFunction
            }
        ]
    };
};

var functionNotImplemented = function() {
    dialog.showMessageBox({
        type: 'info',
        title: 'Dialog',
        buttons: ['ok',],
        message: 'この機能はまだ実装されていません。'
    });
};

var testFunction = function() {
    // Here you can place any test code you'd like to test on a menu click
    functionNotImplemented();
};
