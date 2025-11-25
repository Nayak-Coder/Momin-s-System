import React, { useState, useRef, useEffect } from 'react';

/**
 * ChatWidget
 * - Floating chat button / drawer used on the Home page
 * - Works with a mock assistant by default
 * - Replace the sendMessageToServer() implementation to connect to a real AI backend
 */
const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'assistant', text: 'Hi — I’m the TechLaptop AI assistant. Ask me about products, bundles, or support.', time: new Date().toISOString() },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on new message
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open]);

  const pushMessage = (msg) => setMessages((s) => [...s, { id: Date.now(), ...msg }]);

  // Mock server call (replace with real API call)
  async function sendMessageToServer(userText) {
    // Example: Replace this with fetch('/api/chat', { method: 'POST', body: JSON.stringify({ prompt: userText }) })
    // or call OpenAI through your server. Keep API keys server-side.
    await new Promise((r) => setTimeout(r, 700));

    // Example simple 'smart' responses (very basic). Replace with real model response.
    const lower = userText.toLowerCase();
    if (lower.includes('bundle')) return 'We have bundles for students, pros and gamers — check /bundleoffers to see current deals.';
    if (lower.includes('price') || lower.includes('cost')) return 'You can click any product and see the detailed pricing. I can help compare two models if you provide their names.';
    if (lower.includes('ai') || lower.includes('drone')) return 'We are working on AI and Smart Drone projects — visit the Tech page to learn more about upcoming releases.';
    return "Thanks — I'll pass that along. For product-specific help please give the model name or ask to show bundles.";
  }

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput('');
    pushMessage({ from: 'user', text, time: new Date().toISOString() });
    setLoading(true);
    try {
      const reply = await sendMessageToServer(text);
      pushMessage({ from: 'assistant', text: reply, time: new Date().toISOString() });
    } catch (err) {
      pushMessage({ from: 'assistant', text: "Sorry — I couldn't reach the helper. Try again later.", time: new Date().toISOString() });
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Floating button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen((o) => !o)}
          className="bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h2" />
            </svg>
          )}
        </button>
      </div>

      {/* Drawer / chat panel */}
      <div className={`fixed right-6 bottom-24 z-50 transition-transform ${open ? 'translate-y-0' : 'translate-y-6 opacity-0 pointer-events-none'}`} style={{ width: 360 }}>
        <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">TechLaptop Assistant</div>
                <div className="text-xs text-blue-200">Ask about products, bundles, or support</div>
              </div>
            </div>
            <div className="text-xs text-white/80">Online</div>
          </div>

          <div ref={messagesRef} className="h-72 overflow-y-auto p-4 space-y-4 bg-gradient-to-t from-white to-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                <div className={`${m.from === 'assistant' ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'} px-4 py-2 rounded-lg max-w-[80%]`}>
                  <div className="text-sm leading-relaxed">{m.text}</div>
                  <div className="text-[10px] text-gray-400 mt-1 text-right">{new Date(m.time).toLocaleTimeString()}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-600">...typing</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t flex items-center gap-3 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about laptops, bundles or support..."
              className="flex-1 px-3 py-2 rounded-lg border focus:outline-none text-sm"
            />
            <button disabled={loading} type="submit" className="bg-blue-600 text-white px-3 py-2 rounded-lg disabled:opacity-60">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
