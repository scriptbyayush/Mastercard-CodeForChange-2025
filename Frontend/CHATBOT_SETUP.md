# GreenEarth Chatbot 🌱

## Quick Setup

### 1. Install Dependencies
```bash
npm install framer-motion axios
```

### 2. Add OpenAI API Key (Optional)
Create `.env` file in Frontend directory:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Start the App
```bash
npm run dev
```

## Features
- ✅ Floating chat button (bottom-right)
- ✅ Smart responses for GreenEarth questions
- ✅ AI-powered chat (with API key)
- ✅ Mobile responsive
- ✅ Auto-scroll and loading animations

## Test Questions
- "format my feedback"
- "what is participation history?"
- "show my contribution impact"
- "tree planting tips"
- "help"

## Components
- `Chatbot.jsx` - Main component
- `ChatbotButton.jsx` - Floating button
- `ChatWindow.jsx` - Chat interface
- `MessageBubble.jsx` - Message display
- `LoadingDots.jsx` - Loading animation

## Troubleshooting
- **Button not visible**: Check if Chatbot is imported in App.jsx
- **Not responding**: Check browser console for errors
- **API errors**: Verify OpenAI API key in .env file

---
**Built for GreenEarth NGO 🌱**