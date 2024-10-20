import { UserCog } from "lucide-react";
import ChatListing from "./clientComponents/chatListing";

export default function ChatSideBar() {
  return (
    <div className="flex flex-col border-r bg-gray-100/40 dark:border-gray-800 dark:bg-gray-800/40 w-full md:max-w-[300px] overflow-y-auto h-screen">
      <div className="flex h-[10vh] items-center border-b px-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <div className="ml-auto flex items-center gap-2">
          <UserCog className="h-5 w-5" />
        </div>
      </div>
      <ChatListing />
    </div>
  );
}
