export type BaseAuthParams = {
  idInstance: string;
  apiTokenInstance: string;
  apiUrl: string;
};

export interface Message {
  id: string;
  text: string;
  type: 'incomming' | 'outgoing';
  timestamp: number;
}
