import { Formatter } from "./formatter";
import { Record } from "../record";
export declare class Text implements Formatter {
    format(record: Record): string;
}
