import { Record } from "../record";
export interface Formatter {
    format(record: Record): string;
}
