import ChatArea from "./components/chat/chatArea";
import ChatSideBar from "./components/chat/chatSideBar";

export default function App() {
  return (
    <div className="h-screen w-full flex justify-between overflow-hidden relative">
      <ChatSideBar />
      <ChatArea />
    </div>
  );
}
