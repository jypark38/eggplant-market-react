import React from 'react';
import '../styles/ChatList.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ChatListItem } from '../components/ChatListItem';
import chatListData from '../../../libs/dummy/chatListData';

export function ChatList() {
  return (
    <>
      {/* fixed header ? */}
      <Header>
        <span className="a11y-hidden">채팅목록</span>
      </Header>
      <main className="main-with-nav">
        <ul className="chat-list">
          {chatListData.map(item => {
            return (
              <li>
                <ChatListItem data={item} />
              </li>
            );
          })}
        </ul>
      </main>
      <Navbar />
    </>
  );
}
