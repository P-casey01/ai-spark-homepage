
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, RefreshCw } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! Describe your business and I'll suggest some AI automation ideas tailored for you.", 
      isUser: false, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      let responseText = '';

      // Simple response logic based on keywords in user input
      const lowercaseInput = inputText.toLowerCase();
      
      if (lowercaseInput.includes('ecommerce') || lowercaseInput.includes('shop') || lowercaseInput.includes('store')) {
        responseText = "For your e-commerce business, I recommend implementing an AI-powered product recommendation engine that learns from customer browsing patterns. You could also add an automated inventory management system that predicts stock needs based on seasonal trends and purchase history.";
      } else if (lowercaseInput.includes('restaurant') || lowercaseInput.includes('food') || lowercaseInput.includes('cafe')) {
        responseText = "Your restaurant could benefit from an AI reservation system that optimizes table assignments and predicts busy periods. You might also consider a smart menu that personalizes recommendations based on customer preferences and dietary restrictions.";
      } else if (lowercaseInput.includes('real estate') || lowercaseInput.includes('property')) {
        responseText = "For your real estate business, I suggest implementing an AI-powered property matching system that connects buyers with ideal properties based on complex preferences. You could also add virtual staging technology that helps clients visualize spaces.";
      } else {
        responseText = "Based on your business description, you could benefit from implementing automated customer service chatbots to handle routine inquiries, data analytics tools to identify growth opportunities, and workflow automation systems to streamline your internal processes. Would you like more specific recommendations for your industry?";
      }

      const aiMessage: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const clearChat = () => {
    setMessages([
      { 
        text: "Hello! Describe your business and I'll suggest some AI automation ideas tailored for you.", 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
    ]);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl border border-agency-mint/20 overflow-hidden flex flex-col h-[600px] max-h-[80vh]">
      <div className="bg-agency-black text-white p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">AI Automation Assistant</h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={clearChat}
            className="h-8 w-8 text-white hover:text-agency-mint hover:bg-transparent"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-300">Describe your business to get personalized automation ideas</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            message={message.text} 
            isUser={message.isUser} 
            timestamp={message.timestamp} 
          />
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="chat-bubble-ai py-3 px-4">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe your business..."
            className="flex-1 bg-gray-100"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            className="bg-agency-mint hover:bg-agency-mint/90 text-agency-black"
            disabled={isTyping || !inputText.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AIChatbot;
