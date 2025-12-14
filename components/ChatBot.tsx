import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ChatBot: React.FC = () => {
  const { data } = useLanguage();
  const { GEMINI_SYSTEM_INSTRUCTION } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am an AI assistant representing Rafael. Ask me anything about his experience, skills, or projects!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
        // Initialize Gemini Client
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages,
                userMessage,
                systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
            }),
        });

        // Use generateContent with system instruction
        if (!response.ok) {
            throw new Error(`Gemini request failed: ${response.status}`);
        }

        const data = await response.json();
        const reply = (data && typeof data.text === 'string' && data.text.trim())
            ? data.text
            : "I'm having trouble connecting to the AI brain right now. Please try again later.";
        
        setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
        console.error("Gemini Error:", error);
        setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again.", isError: true }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-cyan-600 dark:bg-cyan-500 text-white rounded-full shadow-lg shadow-cyan-500/30 dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-96 h-[500px] max-h-[80vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up transition-colors duration-300">
          {/* Header */}
          <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-cyan-500/20 rounded-lg">
                    <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Portfolio Assistant</h3>
                    <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        Online
                    </p>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'model' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-300 dark:border-slate-700">
                            <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        </div>
                    )}
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-cyan-600 text-white rounded-tr-none' 
                        : msg.isError ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-tl-none border border-red-200 dark:border-red-800' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none'
                    }`}>
                        {msg.text}
                    </div>
                    {msg.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                        </div>
                    )}
                </div>
            ))}
            {isLoading && (
                <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
                        <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
                        <Loader2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin" />
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="relative">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about Rafael's skills..."
                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white pl-4 pr-12 py-3 rounded-xl border border-slate-300 dark:border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    disabled={isLoading}
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500">
                    Powered by Gemini 2.5 Flash Lite
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;