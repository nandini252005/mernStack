import { useState, useEffect } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap');

  * {
    color: #898489;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .app {
    background-color: #ccf0f3; 
    display: flex;
  }

  .side-bar {
    background-color: #b8d8db;
    height: 100vh;
    width: 244px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    border: solid 0.5px rgba(255, 255, 255, 0.5);
    background-color: bg-primaryColor; 
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }

  nav {
    border-top: solid 0.5px rgba(255, 255, 255, 0.5);
    padding: 10px;
    margin: 10px;
  }

  .main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .history {
    padding: 10px;
    margin: 10px;
    height: 100%;
  }

  .history li {
    list-style-type: none;
    padding: 15px 0;
    cursor: pointer;
  }

  .info {
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    padding: 10px;
  }

  .input-container {
    position: relative;
    width: 100%;
    max-width: 650px;
  }

  .bottom-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    border: none;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 12px 15px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 54px 55px,
      rgba(0, 0, 0, 0.05) 0 -12px 30px,
      rgba(0, 0, 0, 0.05) 0 4px 6px,
      rgba(0, 0, 0, 0.05) 0 12px 3px,
      rgba(0, 0, 0, 0.05) 0 -3px 5px;
  }

  input:focus {
    outline: none;
  }

  #submit {
    position: absolute;
    bottom: 15px;
    right: 0;
    cursor: pointer;
  }

  .feed {
    width: 100%; 
    padding: 0;
  }

  .feed li {
    display: flex;
    background-color: #ccf0f3;
    width: 80%;
    padding: 20px;
    margin: 20px 0;
    color: #898489;
    border: 1px solid #898489;
    border-radius: 10px;
  }

  .feed p {
    color: #898489;
    font-size: 14px;
    text-align: left;
  }

  .feed p.role {
    min-width: 80px;
  }
`;

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatTitle, setCurrentChatTitle] = useState(null);

  // Create a new chat session
  const createNewChat = () => {
    setResponseMessage(null);
    setInputValue("");
    setCurrentChatTitle(null);
  };

  // Handle switching between previous chats
  const handleChatSelection = (chatTitle) => {
    setCurrentChatTitle(chatTitle);
    setResponseMessage(null);
    setInputValue("");
  };

  // Fetch AI response from the server
  const fetchMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ message: inputValue }),
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch("http://localhost:8001/completions", options);
      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        setResponseMessage(data.choices[0].message);
      } else {
        setResponseMessage({ role: "AI", content: "No response from AI." });
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Update chat history when a new message is received
  useEffect(() => {
    if (!currentChatTitle && inputValue && responseMessage) {
      setCurrentChatTitle(inputValue);
    }

    if (currentChatTitle && inputValue && responseMessage) {
      setChatHistory((prevChats) => [
        ...prevChats,
        { title: currentChatTitle, role: "User", content: inputValue },
        { title: currentChatTitle, role: responseMessage.role, content: responseMessage.content },
      ]);
    }
  }, [responseMessage, currentChatTitle]);

  // Filter chat messages by selected chat title
  const filteredChatHistory = chatHistory.filter((chat) => chat.title === currentChatTitle);
  const uniqueChatTitles = Array.from(new Set(chatHistory.map((chat) => chat.title)));

  return (
    <ChatContainer>
      <div className="app">
        {/* Sidebar Section */}
        <section className="side-bar">
          <button onClick={createNewChat}>+ New Chat</button>
          <ul className="history">
            {uniqueChatTitles.map((title, index) => (
              <li key={index} onClick={() => handleChatSelection(title)}>
                {title}
              </li>
            ))}
          </ul>
          <nav>
            <p>Made by Medikerim</p>
          </nav>
        </section>

        {/* Main Chat Section */}
        <section className="main">
          {!currentChatTitle && <h1>Medikerim AI Chat</h1>}
          <ul className="feed">
            {filteredChatHistory.map((chatMessage, index) => (
              <li key={index}>
                <p className="role">{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>
            ))}
          </ul>

          {/* Input Section */}
          <div className="bottom-section">
            <div className="input-container">
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <div id="submit" onClick={fetchMessages}>➢</div>
            </div>
            <p className="info">
              ChatGPT is a free AI system. Use it for conversations, insights, automation, and AI advancements.
            </p>
          </div>
        </section>
      </div>
    </ChatContainer>
  );
};

export default Chat;
