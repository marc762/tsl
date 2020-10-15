import { Formatter } from "./formatter";
import { Record } from "../record";
export declare class Json implements Formatter {
    format(record: Record): string;
}
