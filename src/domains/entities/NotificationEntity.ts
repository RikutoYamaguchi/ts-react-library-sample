export type NotificationEntityProps = {
  id: string;
  title: string;
  body: string;
  alreadyRead: boolean;
};

export const STATUS = {} as const;

export class NotificationEntity {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly alreadyRead: boolean;

  constructor({ id, title, body, alreadyRead }: NotificationEntityProps) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.alreadyRead = alreadyRead;
  }
}
