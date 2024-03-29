'use client'

import { Chat } from "@/types/Chat";
import { ChatArea } from "./components/ChatArea";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {v4 as uuidv4 } from 'uuid';



import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { SidebarChatButton } from "./components/SidebarChatButton";


const Page = () => {
  

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);

  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);
  

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]); 

  useEffect(()  => {
    if(AILoading) getAIResponse();

  }, [AILoading])

  

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const getAIResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if(chatIndex >= -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),// 2:44
          author: 'ai',
          body: 'Aqui vai a resposta AI'
        });
      }
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000);
  }

 

  const handleClearConversations = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  };

  
  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    closeSidebar();
    
  }

  

  const handleSendMessage = (message: string) => {  
    if(!chatActiveId) {
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message}
        ]
      }, ...chatList,]);

      setChatActiveId(newChatId); 

    } else {
     
      let chatListClone = [...chatList,];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
       chatListClone[chatIndex].messages.push({
        id: uuidv4(), 
        author: 'me', 
        body: message
      });
      setChatList(chatListClone);

       }

       setAILoading(true);

  }

  const handleSeleteChat = (id: string) => {
    if(AILoading) return;

    let item = chatList.find(item => item.id === id);
    if(item) setChatActiveId(item.id);
    closeSidebar();



  }

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId('');

   
    
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if(newTitle) {
      let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id);
    // chatListClone[chatIndex].title= newTitle;
    setChatList(chatListClone);

    }
    
  }


 return (
  <main className="flex min-h-screen bg-gpt-gray">
    <Sidebar
      open={sidebarOpened}
      onClose={closeSidebar}
      onClear={handleClearConversations}
      onNewChat={handleNewChat}
    >
      {chatList.map(item => (
        <SidebarChatButton 
        key={item.id}
        chatItem={item}
        active={item.id === chatActiveId}
        onClick={handleSeleteChat}
        onDelete={handleDeleteChat}
        onEdit={handleEditChat}
        />
      ))}
      <div>...</div>
      
    </Sidebar>
    <section className="flex flex-col w-ful">
      <button onClick={() => setSidebarOpened(true)}>Abrir sidebar</button>

      <Header openSidebarClick={openSidebar}
      title={chatActive ? chatActive.title : 'nova conversa'}
      newChatClick={handleNewChat}

      />
      
      <ChatArea chat={chatActive}  loading={AILoading}/>

      <Footer
      onSendMessage={handleSendMessage}
      disabled={AILoading}
      />

    </section>
  </main>);
}

export default Page;


