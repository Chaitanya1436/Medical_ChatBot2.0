import { cn } from "@/lib/utils";
import botIconSrc from "@assets/generated_images/Medical_chatbot_robot_icon_893dfb67.png";
import userIconSrc from "@assets/generated_images/User_avatar_icon_71630caa.png";

interface ChatMessageProps {
  type: "bot" | "user";
  children: React.ReactNode;
  className?: string;
}

export function ChatMessage({ type, children, className }: ChatMessageProps) {
  const isBot = type === "bot";

  return (
    <div
      className={cn(
        "flex gap-3 mb-4 animate-in slide-in-from-bottom-2 duration-200",
        isBot ? "justify-start" : "justify-end",
        className
      )}
      data-testid={`message-${type}`}
    >
      {isBot && (
        <div className="flex-shrink-0">
          <img
            src={botIconSrc}
            alt="MedBot"
            className="w-10 h-10 rounded-full"
            data-testid="icon-bot"
          />
        </div>
      )}

      <div
        className={cn(
          "max-w-[75%] px-4 py-3 rounded-2xl transition-all duration-200",
          "border-2 border-transparent hover:border-primary/50 hover:shadow-lg",
          isBot
            ? "bg-chatbot-bubble text-chatbot-bubble-foreground"
            : "bg-user-bubble text-user-bubble-foreground"
        )}
      >
        {children}
      </div>

      {!isBot && (
        <div className="flex-shrink-0">
          <img
            src={userIconSrc}
            alt="User"
            className="w-10 h-10 rounded-full"
            data-testid="icon-user"
          />
        </div>
      )}
    </div>
  );
}
