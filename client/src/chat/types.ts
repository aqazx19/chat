export interface SendMessageRequest {
  content: string;
}
export interface SendMessageResponse {
  id: string;
  role: string;
  content: string;
  name?: string
  timestamp: Date;
}

export interface ChatBoxProps {
  title?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  messages: SendMessageResponse[];
  sendMessage: (message: string) => void;
  isLoading: boolean;
  clearMessages: () => void;
}

export interface ChatHeaderProps {
  title?: string;
  onClose?: () => void;
  onMinimize?: () => void;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export interface MessageListProps {
  messages: SendMessageResponse[];
}