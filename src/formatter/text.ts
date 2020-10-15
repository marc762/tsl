import {Formatter} from "./formatter";
import {Record} from "../record";

export class Text implements Formatter {
  format(record: Record): string {
    return record.message;
  }
}
