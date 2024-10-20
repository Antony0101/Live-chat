import SendChatMessage from "./clientComponents/sendComponents";
import MessageListing from "./clientComponents/messageListing";
import ChatHeader from "./clientComponents/chatHeader";

export default function ChatArea() {
    const selectedChat = {
        chatId: 1,
    }
    return (
        <div
            className={`${selectedChat.chatId ? "" : "hidden"} absolute md:block md:static w-full z-20`}
        >
            <div className="flex flex-col w-full relative bg-white opacity-100">
                <ChatHeader />
                <div className="flex justify-between overflow-auto max-h-[90vh] p-4 w-full h-[90vh]">
                    <div className="flex flex-col gap-4 w-full">
                        <MessageListing />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <SendChatMessage />
                </div>
            </div>
        </div>
    );
}
