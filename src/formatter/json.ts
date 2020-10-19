import { Formatter } from './formatter';
import { Record } from '../record';

export class Json implements Formatter {
  format(record: Record): string {
    const jsonRecord = {
      message: record.message,
      context: record.context,
    };

    return JSON.stringify(jsonRecord);
  }
}
