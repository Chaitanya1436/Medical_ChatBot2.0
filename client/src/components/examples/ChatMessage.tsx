import { ChatMessage } from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="bg-background p-8 space-y-4">
      <ChatMessage type="bot">
        Hello! I'm MedBot, your AI medical assistant. I'll help you analyze your symptoms and provide medication recommendations. Let's start with your name.
      </ChatMessage>
      
      <ChatMessage type="user">
        My name is John Doe
      </ChatMessage>
      
      <ChatMessage type="bot">
        Nice to meet you, John! Now, please select your gender.
      </ChatMessage>
    </div>
  );
}
