import { Handler } from "./handler";
import { Formatter } from "../formatter/formatter";
import { Record } from "../record";
export declare class Console implements Handler {
    handle(record: Record, formatter: Formatter): void;
}
