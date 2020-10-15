'use strict';

import {Formatter} from "../formatter/formatter";
import {Record} from "../record";

export interface Handler {
  handle(record: Record, formatter: Formatter): void;
}
