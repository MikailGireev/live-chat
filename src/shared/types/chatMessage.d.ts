export interface ChatMessage {
  user?: 'me' | 'other';
  id?: string;
  message?: string;
}
