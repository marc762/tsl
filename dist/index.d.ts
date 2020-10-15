export declare function init(options: any): void;
export declare const enum Level {
    EMERGENCY = "emergency",
    ALERT = "alert",
    CRITICAL = "critical",
    ERROR = "error",
    WARNING = "warning",
    NOTICE = "notice",
    INFO = "info",
    DEBUG = "debug"
}
export declare function log(level: Level, message: string, context?: object): void;
