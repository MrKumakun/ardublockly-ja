/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  Ardublockly specific English strings.
 *
 * After modifying this file, either run "build.py" from the blockly directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/**
 * Arduino Blocks
 */
/// block text - 
Blockly.Msg.ARD_HIGH = 'HIGH';
/// block text - 
Blockly.Msg.ARD_LOW = 'LOW';
/// block text - 
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
/// tooltip - Return value between 0 and 1024
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
/// block text - 
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
/// tooltip - Write analog value between 0 and 255 to a specific PWM Port
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
/// block text - 
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a pin state logic High or Low.';
/// block text - 
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
/// tooltip - Read digital value on a pin: HIGH or LOW
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a pin: HIGH or LOW';
/// block text - 
Blockly.Msg.ARD_DIGITALWRITE = 'set digitial pin#';
/// block text - 
Blockly.Msg.ARD_WRITE_TO = 'to';
/// tooltip - Write digital value HIGH or LOW to a specific Port
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
/// block text - 
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
/// tooltip - Light on or off for the built-in LED of the Arduino
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Light on or off for the built-in LED of the Arduino';
/// block text - 
Blockly.Msg.ARD_DEFINE = 'Define';
/// block text - 
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
/// block text - 
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
/// tooltip - Generate audio tones on a pin
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a pin';
/// block text - 
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
/// tooltip - Stop generating a tone on a pin
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a pin';
/// block text - 
Blockly.Msg.ARD_MAP = 'Map';
/// block text - 
Blockly.Msg.ARD_MAP_VAL = 'value to [0-';
/// block text - 
Blockly.Msg.ARD_MAP_VAL_END = ']';
/// tooltip - Re-maps a number from [0-1024] to another.
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [0-1024] to another.';
/// block text - 
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
/// block text - 
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
/// tooltip - Defines the Arduino setup() and loop() functions.
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
/// warning - Pin %1 is needed for %2 as pin %3. Already used as %4.
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
/// block text - 
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
/// block text - 
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
/// block text - 
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
/// tooltip - Selects the speed for a specific Serial peripheral
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
/// block text - 
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
/// block text - 
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
/// tooltip - Prints data to the console/serial port as human-readable ASCII text.
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
/// warning - A setup block for %1 must be added to the workspace to use this block!
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
/// block text - 
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
/// block text - 
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
/// block text - 
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
/// tooltip - Set a Servo to an specified angle
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Set a Servo to an specified angle';
/// block text - 
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
/// tooltip - Read a Servo angle
Blockly.Msg.ARD_SERVO_READ_TIP = 'Read a Servo angle';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
/// block text - 
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
/// tooltip - Configures the SPI peripheral.
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
/// block text - 
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
/// block text - 
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
/// block text - 
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
/// tooltip - Send a SPI message to an specified slave device.
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Send a SPI message to an specified slave device.';
/// warning - A setup block for %1 must be added to the workspace to use this block!
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
/// warning - Old pin value %1 is no longer available.
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
/// tooltip - Send a SPI message to an specified slave device and get data back.
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
/// block text - 
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
/// block text - 
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
/// block text - 
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
/// block text - 
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
/// block text - 
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
/// block text - 
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
/// block text - 
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
/// block text - 
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
/// block text - 
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
/// block text - 
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
/// block text - 
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
/// block text - 
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
/// tooltip - Configures a stepper motor pinout and other settings.
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
/// block text - 
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
/// block text - 
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
/// tooltip - Turns the stepper motor a specific number of steps
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
/// block text - 
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';
/// warning - A %1 configuration block with the same %2 name must be added to use this block!
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
/// block text - 
Blockly.Msg.ARD_TIME_DELAY = 'wait';
/// block text - 
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
/// tooltip - Wait specific time in milliseconds
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
/// block text - 
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
/// tooltip - Wait specific time in microseconds
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
/// block text - 
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
/// tooltip - Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
/// block text - 
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
/// tooltip - Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
/// block text - 
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
/// tooltip - Wait indefinitely, stopping the program.
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely, stopping the program.';
/// block text - 
Blockly.Msg.ARD_VAR_AS = 'as';
/// tooltip - Sets a value to a specific type
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
/// block text - 
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
/// block text - 
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
/// tooltip - Sets tone on pin to specified frequency within range 31 - 65535
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
/// warning - Frequency must be in range 31 - 65535
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
/// block text - 
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
/// tooltip - Turns the tone off on the selected pin
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

/**
 * Interpput  
 */
/// falling edge of this signal.
Blockly.Msg.ARD_FALLING = 'Falling';
/// rising edge of this signal.
Blockly.Msg.ARD_RISING = 'Rising';
/// change in signal (rising or falling).
Blockly.Msg.ARD_CHANGE = 'Change';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';

