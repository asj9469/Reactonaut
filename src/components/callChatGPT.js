//TODO: refactor App.js by bringing all Chat GPT related functions here


// const [messages, setMessages] = useState([]);
// const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

// export async function callChatGptApi(prompt){

//     try {
//       const formattedPrompt = `I am using react-live with AceEditor to build a web application. My current code is:\n${code}\n\nUser: ${prompt}\n\nChatGPT, please provide me the code to achieve this, answer with full code:`;
      
//       console.log('Sending OpenAI request...');
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + API_KEY
//         },
//         body: JSON.stringify({
//           model: 'text-davinci-003',
//           prompt: formattedPrompt,
//           max_tokens: 2000,
//           n: 1,
//           stop: null,
//           temperature: 0.5,
//           top_p: 1,
//           frequency_penalty: 0,
//           presence_penalty: 0,
//         }),
//       });

//       const data = await response.json();
        
//       if (data.choices && data.choices.length > 0) {
//         const chatGptResponse = data.choices[0].text.trim();
//         setMessages(prevMessages => [...prevMessages, { sender: 'ChatGPT', text: chatGptResponse, showFullResponse: false }]);
//         setIsWaitingForResponse(false);
//       } else {
//         console.error('Error calling ChatGPT API: invalid response format');
//         setIsWaitingForResponse(false);
//       }
//     } catch (error) {
//       console.error('Error calling ChatGPT API:', error);
//       setIsWaitingForResponse(false);
//     }
//   };