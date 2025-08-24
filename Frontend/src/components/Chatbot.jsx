import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your GreenEarth  personal assistant. I can help you with:',
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'bot',
      content: '🌱 Understanding your contribution impact\n📊 Checking your participation history\n✍️ Formatting your feedback\n\nHow can I help you today?',
      timestamp: new Date()
    }
  ]);

  const toggleChat = () => {
    console.log('toggleChat called, current isOpen:', isOpen);
    setIsOpen(!isOpen);
  };

  const addMessage = (content, type = 'user') => {
    const newMessage = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Smart responses for GreenEarth-related questions
  const getSmartResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Feedback formatting
    if (lowerMessage.includes('feedback') || lowerMessage.includes('format')) {
      return `Here's a great feedback format for GreenEarth:

**Event Details:**
- Event Name: [Tree Planting Drive/Workshop/etc.]
- Date: [Date of participation]
- Location: [Plantation site]

**Your Experience:**
- Number of trees planted: [X trees]
- Overall experience: [Excellent/Good/Fair/Poor]
- What you enjoyed most: [Be specific]

**Suggestions for Improvement:**
- What could be better: [Constructive feedback]
- Would you participate again: [Yes/No]

**Additional Comments:**
[Any other thoughts or suggestions]

This format helps us understand your experience better and improve our future events! 🌱`;
    }
    
    // Participation history
    if (lowerMessage.includes('participation') || lowerMessage.includes('history')) {
      return `Your participation history with GreenEarth includes:

**📊 Your Stats:**
- Total trees planted: 78 trees
- Events participated: 12 drives
- Areas covered: 8 different locations
- Certificates earned: 8

**🏆 Recent Activities:**
- Mangrove Restoration Drive (Jan 2024)
- Urban Forest Initiative (Dec 2023)
- Community Tree Planting (Nov 2023)

**📈 Impact Created:**
- Carbon offset: ~2.3 tons CO₂
- Habitat restoration: 3 hectares
- Community engagement: 45+ volunteers inspired

You're making a significant environmental impact! Keep up the great work! 🌍`;
    }
    
    // Contribution impact
    if (lowerMessage.includes('contribution') || lowerMessage.includes('impact')) {
      return `Your contribution to GreenEarth has created amazing impact:

**🌱 Environmental Impact:**
- 78 trees planted = ~2.3 tons CO₂ offset annually
- Habitat restoration for local wildlife
- Improved air quality in your community
- Soil erosion prevention

**🌍 Global Impact:**
- Every tree you plant helps combat climate change
- Contributes to biodiversity conservation
- Supports UN Sustainable Development Goals
- Inspires others to join environmental causes

**📊 Your Personal Impact:**
- You've inspired 12+ people to join tree planting
- Created lasting environmental legacy
- Built stronger community connections
- Developed environmental leadership skills

Your dedication is truly making the world greener! 🌱✨`;
    }
    
    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return `I'm your GreenEarth assistant! Here's how I can help:

**🌱 Contribution Impact:**
- Explain your environmental impact
- Show your carbon offset calculations
- Highlight your achievements

**📊 Participation History:**
- Track your past events
- Show your statistics
- Display your certificates

**✍️ Feedback Assistance:**
- Format your feedback properly
- Suggest improvement areas
- Help you write detailed reviews

**🌍 General Support:**
- Answer environmental questions
- Provide tree planting tips
- Share conservation knowledge

Just ask me anything related to GreenEarth or environmental conservation! 🌱`;
    }
    
    // Tree planting tips
    if (lowerMessage.includes('tree') || lowerMessage.includes('plant')) {
      return `Great question about tree planting! Here are some tips:

**🌱 Best Practices:**
- Choose native species for your area
- Plant during monsoon season (June-September)
- Ensure proper spacing (10-15 feet apart)
- Water regularly for first 2-3 years

**📍 Location Selection:**
- Avoid areas with underground utilities
- Consider future growth space
- Choose well-drained soil
- Ensure adequate sunlight

**🛠️ Planting Process:**
1. Dig hole 2-3 times wider than root ball
2. Loosen soil at bottom
3. Place tree and backfill gently
4. Water thoroughly
5. Add mulch around base

**🌿 Aftercare:**
- Water regularly (especially first year)
- Protect from animals and damage
- Monitor for pests/diseases
- Prune as needed

Would you like to join our next tree planting drive? 🌱`;
    }
    
    // Default response
    return `I understand you're asking about "${message}". As your GreenEarth assistant, I can help you with:

• Understanding your contribution impact
• Checking your participation history  
• Formatting your feedback
• Tree planting tips and best practices
• Environmental conservation information

Could you please rephrase your question or ask about one of these specific areas? I'm here to help make your GreenEarth experience better! 🌱`;
  };

  const handleSendMessage = async (message) => {
    addMessage(message, 'user');
    
    // Add loading message
    const loadingId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: loadingId,
      type: 'loading',
      content: '',
      timestamp: new Date()
    }]);

    try {
      // First try to use OpenAI API if key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (apiKey && apiKey !== 'your-api-key-here') {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `You are a helpful assistant for GreenEarth NGO, a tree plantation and environmental conservation organization. 
                Help users understand their contribution impact, participation history, and format their feedback. 
                Keep responses friendly, informative, and focused on environmental conservation.`
              },
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: 300
          })
        });

        if (response.ok) {
          const data = await response.json();
          const botResponse = data.choices[0]?.message?.content || 'I don\'t have an answer for that right now.';
          
          // Remove loading message and add bot response
          setMessages(prev => prev.filter(msg => msg.id !== loadingId));
          addMessage(botResponse, 'bot');
          return;
        }
      }
      
      // Fallback to smart responses if API fails or no key
      const smartResponse = getSmartResponse(message);
      
      // Remove loading message and add smart response
      setMessages(prev => prev.filter(msg => msg.id !== loadingId));
      addMessage(smartResponse, 'bot');

    } catch (error) {
      console.error('Chatbot error:', error);
      
      // Remove loading message and add smart response as fallback
      setMessages(prev => prev.filter(msg => msg.id !== loadingId));
      const smartResponse = getSmartResponse(message);
      addMessage(smartResponse, 'bot');
    }
  };

  console.log('Chatbot rendered, isOpen:', isOpen);

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={toggleChat} />
      {isOpen && (
        <ChatWindow 
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={toggleChat}
        />
      )}
    </>
  );
};

export default Chatbot;
