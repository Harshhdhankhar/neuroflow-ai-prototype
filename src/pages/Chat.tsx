import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Heart, Lightbulb, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI mental health companion. I'm here to listen, support, and help you navigate your feelings. How are you doing today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    "I hear you, and I want you to know that your feelings are completely valid. Can you tell me more about what's been on your mind?",
    "Thank you for sharing that with me. It takes courage to open up about your struggles. What emotions are you experiencing most strongly right now?",
    "I understand this is difficult for you. Sometimes just talking about what we're going through can provide some relief. What would be most helpful for you in this moment?",
    "Your mental health journey is unique to you, and there's no wrong way to feel. Have you noticed any particular triggers or patterns in how you've been feeling?",
    "I'm glad you're taking the time to check in with yourself today. Self-awareness is an important step in caring for your mental health. What's one small thing that might bring you comfort right now?",
    "It sounds like you're dealing with a lot. Remember, seeking support is a sign of strength, not weakness. What coping strategies have helped you in the past?",
    "I want to remind you that you're not alone in this. Many people experience similar struggles. Is there anything specific you'd like to work through together?",
    "Your wellbeing matters, and I'm here to support you through this. Sometimes it helps to break things down into smaller, manageable pieces. What feels most overwhelming right now?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickPrompts = [
    "I'm feeling anxious today",
    "I'm having trouble sleeping",
    "I feel overwhelmed",
    "I need motivation",
    "I'm feeling lonely",
    "I want to talk about stress"
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            AI <span className="text-gradient">Mental Health</span> Chat
          </h1>
          <p className="text-muted-foreground">
            Share your thoughts and feelings in a safe, judgment-free space
          </p>
        </div>

        <Card className="therapy-card mb-6">
          <CardContent className="p-0">
            <ScrollArea className="h-96 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}>
                      <div className={`p-2 rounded-full ${
                        message.sender === "user" 
                          ? "bg-primary/10" 
                          : "bg-secondary/50"
                      }`}>
                        {message.sender === "user" ? (
                          <User className="h-4 w-4 text-primary" />
                        ) : (
                          <Bot className="h-4 w-4 text-secondary-foreground" />
                        )}
                      </div>
                      <div className={`${
                        message.sender === "user" 
                          ? "chat-bubble-user" 
                          : "chat-bubble-ai"
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <span className="text-xs opacity-70 mt-2 block">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-secondary/50 rounded-full">
                        <Bot className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div className="chat-bubble-ai">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Quick Prompts */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Quick prompts to get started:</p>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputMessage(prompt)}
                className="text-sm"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <Card className="therapy-card">
          <CardContent className="p-4">
            <div className="flex space-x-4">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Share what's on your mind..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="calm-button"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  <span>Safe & Confidential</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  <span>AI-Powered Support</span>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-3 w-3 mr-1" />
                <span>Available 24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Important:</strong> This AI chat is for emotional support and guidance. 
            If you're experiencing a mental health crisis, please contact emergency services 
            or visit our <a href="/crisis" className="text-primary hover:underline">Crisis Support</a> page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;