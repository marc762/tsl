export class Record {
  public message: string;
  public context: object;

  constructor(message: string, context?: object) {
    this.message = message;
    this.context = context || {};
  }
}
