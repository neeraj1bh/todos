export enum STATUS {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export type Todo = {
  text: string;
  status: STATUS;
  key: string;
};

export enum SCREENS {
  HOME = 'home',
  PENDING = 'pending',
  COMPLETED = 'completed',
}
