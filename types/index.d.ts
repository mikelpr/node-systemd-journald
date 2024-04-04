declare module "systemd-journald" {
  // https://man7.org/linux/man-pages/man7/systemd.journal-fields.7.html
  export type JournalFields = {
    message_id?: string,
    code_file?: string,
    code_line?: string,
    code_func?: string,
    errno?: string,
    invocation_id?: string,
    user_invocation_id?: string,
    syslog_facility?: string,
    syslog_identifier?: string,
    syslog_pid?: string,
    syslog_timestamp?: string,
    syslog_raw?: string,
    documentation?: string,
    tid?: string,
    unit?: string,
    user_unit?: string
  }

  export default class systemd_journald {
    constructor(defaultFields: JournalFields);

    alert(message: string, fields?: JournalFields): void;
    crit(message: string, fields?: JournalFields): void;
    debug(message: string, fields?: JournalFields): void;
    emerg(message: string, fields?: JournalFields): void;
    err(message: string, fields?: JournalFields): void;
    info(message: string, fields?: JournalFields): void;
    notice(message: string, fields?: JournalFields): void;
    warning(message: string, fields?: JournalFields): void;
    static alert(message: string, fields?: JournalFields): void;
    static crit(message: string, fields?: JournalFields): void;
    static debug(message: string, fields?: JournalFields): void;
    static emerg(message: string, fields?: JournalFields): void;
    static err(message: string, fields?: JournalFields): void;
    static info(message: string, fields?: JournalFields): void;
    static notice(message: string, fields?: JournalFields): void;
    static warning(message: string, fields?: JournalFields): void;
  }
}
