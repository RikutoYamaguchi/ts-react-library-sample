export type NotificationEntityProps = {
  id: string;
  title: string;
  body: string;
  alreadyRead: boolean;
  created: string;
};

export const STATUS = {} as const;

export class NotificationEntity {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly alreadyRead: boolean;
  readonly created: string;

  constructor({
    id,
    title,
    body,
    alreadyRead,
    created,
  }: NotificationEntityProps) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.alreadyRead = alreadyRead;
    this.created = created;
  }
}
