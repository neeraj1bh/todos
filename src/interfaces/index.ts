export enum STATUS {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export type Todo = {
  text: string;
  status: STATUS;
  key: string;
};
