'use strict';

import { Handler } from './handler';
import { Formatter } from '../formatter/formatter';
import { Record } from '../record';

export class Console implements Handler {
  public handle(record: Record, formatter: Formatter): void {
    process.stdout.write(`${formatter.format(record)}\n`);
    // TODO: handle stderr
  }
}
