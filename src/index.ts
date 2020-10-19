'use strict';

import { Console } from './handler/console';
import { Handler } from './handler/handler';
import { Formatter } from './formatter/formatter';
import { Text } from './formatter/text';
import { Record } from './record';

let handler: Handler = new Console();
let formatter: Formatter = new Text();

export function init(options: any) {
  if (options.handler) {
    handler = options.handler;
  }

  if (options.formatter) {
    formatter = options.formatter;
  }
}

export const enum Level {
  EMERGENCY = 'emergency',
  ALERT = 'alert',
  CRITICAL = 'critical',
  ERROR = 'error',
  WARNING = 'warning',
  NOTICE = 'notice',
  INFO = 'info',
  DEBUG = 'debug',
}

export function log(level: Level, message: string, context?: object) {
  handler.handle(new Record(message, context), formatter);
}
