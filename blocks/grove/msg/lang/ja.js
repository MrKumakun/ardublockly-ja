/**
 * TODO: 仮作成。本来はジェネレートできるようにすべき
*/
'use strict';

goog.require('Blockly.Msg.ja');

goog.require('Blockly.Msg');

/// Toolbox category name
Blockly.Msg.BLOCKS_GROVE_CATEGORY = 'Grove';

/// LED block
Blockly.Msg.BLOCKS_GROVE_LED = 'LEDの点灯。接続先は';
Blockly.Msg.BLOCKS_GROVE_LED_TIP = 'LED をオン (HIGH) またはオフ (LOW) にします。';

/// Button block
Blockly.Msg.BLOCKS_GROVE_BUTTON = 'ボタンの状態を読込み。接続先は';
Blockly.Msg.BLOCKS_GROVE_BUTTON_TIP = 'ボタンを押すとHIGHに設定され、それ以外の場合はLOWに設定されます。';

/// Joystick block
Blockly.Msg.BLOCKS_GROVE_JOYSTICK = 'ジョイスティックの';
Blockly.Msg.BLOCKS_GROVE_JOYSTICK_2 = '軸入力を読込み。接続先は';
Blockly.Msg.BLOCKS_GROVE_JOYSTICK_TIP = 'ジョイスティックの位置を 200 ～ 800 の範囲ｓで読み取ります。';

/// PIR block
Blockly.Msg.BLOCKS_GROVE_PIR = '受動赤外線の状態を読込み。接続先は';
Blockly.Msg.BLOCKS_GROVE_PIR_TIP = '受動赤外線信号を検出したらHIGHに設定され、未検出の場合はLOWに設定されます。';

/// Temperature block
Blockly.Msg.BLOCKS_GROVE_TEMPERATURE = '温度を読込み。接続先は';
Blockly.Msg.BLOCKS_GROVE_TEMPERATURE_TIP = '温度を℃単位で取得します。';

/// LCD RGB block
Blockly.Msg.BLOCKS_GROVE_LCD_RGB = 'LCDにテキストを出力';
Blockly.Msg.BLOCKS_GROVE_LCD_RGB_TIP = 'LCD ディスプレイにテキストを出力します。';
