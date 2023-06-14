const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchChatGptResponseTurbo = async (prompt, code) => {
    // try {
    //     const systemMessage = {
    //       role: "system",
    //       content: "You're a helpful AI that provides code assistance and explanations in a manner understandable to a five-year-old."
    //     };
    //     const userCodeMessage = {
    //       role: "user",
    //       content: 'Here is my current React code snippet: \n\n${code}\n\nI have the following dependencies installed: "@mui/material, @material-ui/core, @mui/icons-material, @emotion/styled, @material-ui/icons, @emotion/react, and "react-router-dom": "^6.11.2"". I would like to use these dependencies to create a modern and visually appealing appearance for my application.'
    //     };
    //     const userChangeRequestMessage = {
    //       role: "user",
    //       content: 'I need to make the following changes or additions to my code: ${prompt}. Could you provide a detailed explanation understandable to a five-year-old, and then the COMPLETE UPDATED CODE that incorporates these changes or additions? Please format your response as follows: [Your explanation here].\n\n{__CodeStart__}\n\n\n[Your entire React code here]\n\n{__CodeEnd__}'
    //     };
    
    //     const messages = [systemMessage, userCodeMessage, userChangeRequestMessage];
    
    //     console.log('Sending OpenAI request...');
    //     const response = await fetch('https://api.openai.com/v1/chat/completions', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + API_KEY
    //       },
    //       body: JSON.stringify({
    //         model: 'gpt-3.5-turbo',
    //         messages,
    //         max_tokens: 2000,
    //         temperature: 0.2,
    //         top_p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //         // stream: true // Enable stream response
    //       }),
    //     });
  
    //     const data = await response.json();
        
    //     if (data.choices && data.choices.length > 0) {
    //       const chatGptResponse = data.choices[0].text.trim();
    //       setMessages(prevMessages => [...prevMessages, { sender: 'ChatGPT', text: chatGptResponse, showFullResponse: false }]);
    //       setIsWaitingForResponse(false);
    //     } else {
    //       console.error('Error calling ChatGPT API: invalid response format');
    //       setIsWaitingForResponse(false);
    //     }
    //   } catch (error) {
    //     console.error('Error calling ChatGPT API:', error);
    //     setIsWaitingForResponse(false);
    //   }
}