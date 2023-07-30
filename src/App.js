import React, { useState, useEffect } from "react";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-twilight';
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { AppBar, Box, TextField, Toolbar, IconButton, Typography, Button, Grid, Container } from "@mui/material";
import { Drawer, List, ListItem, ListItemText} from '@mui/material';
import { Input, Tab, Tabs} from '@mui/material';
import styled from 'styled-components';
import './App.css'
import TabPanel from './Tabs';
import a11yProps from './Tabs';
//import styled components from view

import { ChatBox, ChatBoxContainer, ChatInputBox, HeaderContainer2, TabContainer, ViewContainerRoot, HeaderContainer, 
        LogoContainer, LogoText, LogoImage, CodeEditorRectangle, LiveCodeContainer, FileNameContainer, FileNameInputStyle, 
        FirstRectangle, SecondRectangle, ThirdRectangle, LivePreviewContainer, PreviewSectionContainer, ChatInputStyle } from "./view";

const API_KEY = process.env.REACT_APP_API_KEY;

const initialCode = `
function LandingPage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const containerStyle = {
    backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)',
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    color: 'white',
  };

  const buttonStyle = {
    background: 'white',
    color: 'blue',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Our Website</h1>
      <p>
        We provide top-notch services and solutions for our customers. Explore our offerings and find the best fit for your needs!
      </p>
      <button onClick={handleButtonClick} style={buttonStyle}>
        {buttonClicked ? 'Thanks for clicking!' : 'Learn More'}
      </button>
    </div>
  );
}
`;

function App() {
  const [code, setCode] = useState(initialCode);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [previousCode, setPreviousCode] = useState("");
  const chatHistoryRef = React.useRef(null);

  //setup tabs for preview pane + Chat GPT screen
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const applyCode = (newCode) => {
  setPreviousCode(code);
  setCode(newCode);
  };
  
  const revertCode = () => {
    if (previousCode) {
      setCode(previousCode);
      setPreviousCode("");
    } else {
      alert("No previous code to revert to.");
    }
  };

  const toggleFullResponse = (index) => {
    setMessages(messages.map((message, i) => {
      if(i === index) {
        return {...message, showFullResponse: !message.showFullResponse};
      } else {
        return message;
      }
    }));
  };
 
  async function callChatGptApi(prompt){

    try {
      const formattedPrompt = `I am using react-live with AceEditor to build a web application. My current code is:\n${code}\n\nUser: ${prompt}\n\nChatGPT, please provide me the code to achieve this, answer with full code:`;
      
      console.log('Sending OpenAI request...');
      const response = await fetch('https://api.catto.codes/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: formattedPrompt,
          max_tokens: 2000,
          n: 1,
          stop: null,
          temperature: 0.5,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });

      const data = await response.json();
        
      if (data.choices && data.choices.length > 0) {
        const chatGptResponse = data.choices[0].text.trim();
        setMessages(prevMessages => [...prevMessages, { sender: 'ChatGPT', text: chatGptResponse, showFullResponse: false }]);
        setIsWaitingForResponse(false);
      } else {
        console.error('Error calling ChatGPT API: invalid response format');
        setIsWaitingForResponse(false);
      }
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      setIsWaitingForResponse(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: "user", text: " " + chatInput, showFullResponse: false }]);
    setChatInput("");
    setIsWaitingForResponse(true);
    await callChatGptApi(chatInput);
  };
  
  useEffect(() => {
    if (chatHistoryRef.current) {
      const { scrollHeight } = chatHistoryRef.current;
      chatHistoryRef.current.scrollTo(0, scrollHeight);
    }
  }, [messages]);

  document.body.style.backgroundColor = "#141414";
  document.body.style.margin = "0";

  return (
    <><div>
      <ViewContainerRoot>
      <HeaderContainer>
        <LogoContainer>
          <LogoText>Reactonaut</LogoText>
          <LogoImage src="https://file.rendit.io/n/45hcMBJKBqDxVfYlovlB.png" />
        </LogoContainer>
        <CodeEditorRectangle>
            <FirstRectangle>
            <LiveCodeContainer style={{
                // height: '76vh',
                // width: '100%',
                // position: 'relative', // Add this style to enable position adjustment
                // top: '20px', // Adjust the top position as needed
                // borderRadius: '12px',
                
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '76vh',
                width: '100%',
                marginTop: '20px',
                borderRadius: '12px',
              }}>
            <AceEditor
                name="code-editor"
                mode="jsx"
                theme="twilight"
                value={code}
                onChange={setCode}
                borderRadius= '12px'
                boxSizing= 'border-box'
                fontFamily= 'monospace'
                fontSize = "16px"
                width="99.8%"
                height="100%"
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                wrapEnabled={true}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                  }}
              />
              </LiveCodeContainer>
                          
            </FirstRectangle>
          <SecondRectangle />
          <ThirdRectangle />
          <FileNameContainer>
            <Input type = 'text' style={FileNameInputStyle} placeholder="File Name" />
          </FileNameContainer>
        </CodeEditorRectangle>
      </HeaderContainer>
      <HeaderContainer2>
      <LiveProvider code={code} scope={{
              React,
              useState,
              useEffect,
              AppBar,
              Box,
              TextField,
              Toolbar,
              IconButton,
              Typography,
              Button,
              Grid,
              Container,
              Drawer, List, ListItem, ListItemText,
              styled
            }}
            >
          <PreviewSectionContainer>
              <SecondRectangle />
              <ThirdRectangle />
              <TabContainer>
                <Tabs value={value} onChange={handleChange} aria-label="Tabs" TabIndicatorProps={{ style: { backgroundColor: "#90caf9"}}}>
                  <Tab label="Preview" {...a11yProps(0)} sx={{
                          typography: 'Inter',
                          color: 'white',
                          fontFamily: "Inter",
                          '&.Mui-selected': {
                            color: '#90caf9',
                            fontFamily: "Inter"
                          }}}/>
                  <Tab label="Chat GPT" {...a11yProps(1)} sx={{
                          typography: 'Inter',
                          color: 'white',
                          fontFamily: "Inter",
                          '&.Mui-selected': {
                            color: '#90caf9',
                            fontFamily: "Inter"
                          }}} />
                </Tabs>
              </TabContainer>
                
            <TabPanel value={value} index={0}>
              <LivePreviewContainer >
                  <LivePreview />
                  <LiveError />
              </LivePreviewContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <ChatBoxContainer>
              <ChatBox ref={chatHistoryRef}>
                {messages.map((message, index) => (
                  <div key={message.id} style={{ marginBottom: "0.5rem" }}>
                    <strong>{message.sender}:</strong>
                    {message.sender !== "ChatGPT" && message.text}
                    {message.sender === "ChatGPT" && (
                      <>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => applyCode(message.text)}
                          style={{ marginLeft: "1rem" }}
                        >
                          Apply Code
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => toggleFullResponse(index)}
                          style={{ marginLeft: "0.5rem" }}
                        >
                          {message.showFullResponse ? "Hide Full Response" : "Show Full Response"}
                        </Button>
                        {message.showFullResponse && (
                          <pre style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem" }}>
                            {message.text}
                          </pre>
                        )}
                      </>
                    )}
                  </div>
                ))}
                {isWaitingForResponse && (
                  <div>
                    <strong>ChatGPT:</strong> thinking...
                  </div>
                )}
              </ChatBox>
              
              <form onSubmit={handleChatSubmit}>
                <ChatInputBox>
                  <Button
                      style={{ padding: 0,
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer', }}
                      onClick={revertCode}
                    >
                      <img src="https://file.rendit.io/n/mNo3dAabgi5Ose8Uy7Ob.png"
                        alt="Undo"
                        style={{
                          height: '25px',
                          width: '25px',
                        }}/>
                  </Button>

                  <input 
                    type="text"
                    placeholder="Type a message (ex: make button bigger)"
                    style={ChatInputStyle} 
                    value={chatInput} 
                    onChange={(e) => setChatInput(e.target.value)} />

                  <Button type="submit"  style={{
                          padding: 0,
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                        }}>
                          <img src="https://file.rendit.io/n/q5Axl43rqp5SyWyIcZJ1.png"
                            alt="Send"
                            style={{
                              height: '25px',
                              width: '25px',
                            }}
                          />
                  </Button>
                </ChatInputBox>
              </form>
          </ChatBoxContainer>
            </TabPanel>
            </PreviewSectionContainer>
      </LiveProvider>
      </HeaderContainer2>
    </ViewContainerRoot>
    </div>
    </>
  );
}

export default App;





