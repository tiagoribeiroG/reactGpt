'use client'

import { Chat } from "@/types/Chat";
import { ChatArea } from "./components/ChatArea";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {v4 as uuidv4 } from 'uuid';



import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";


const Page = () => {
  

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);

  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);
  

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]); 

  

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

 

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


return (
  <main className="flex min-h-screen bg-gpt-gray">
    <Sidebar
      open={sidebarOpened}
      onClose={closeSidebar}
      onClear={handleClearConversations}
      onNewChat={handleNewChat}
    >
      <div>...</div>
      
    </Sidebar>
    <section className="flex flex-col w-ful">
      <button onClick={() => setSidebarOpened(true)}>Abrir sidebar</button>

      <Header openSidebarClick={openSidebar}
      title={``}
      newChatClick={handleNewChat}

      />
      
      <ChatArea chat={chatActive} />

      <Footer
      onSendMessage={handleSendMessage}
      disabled={AILoading}
      />

    </section>
  </main>);
}

export default Page;


