import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import SendIcon from "../../icons/sendIcon";
import { useState } from "react";
// import { createMessageAction } from "../../../server/actions/chat.action";

function SendChatMessage() {
    const [input, setInput] = useState("");
    const sendMessage = async () => {
        // await createMessageAction(selectedChat.chatId, {
        //     message: input,
        //     messageType: "text",
        // });
        console.log("Message Sent");
    };
    // if (!selectedChat.chatId) return <></>;
    return (
        <div
            className="flex  h-[60px] items-center border-t bg-gray-100/40 px-4 dark:border-gray-800 dark:bg-gray-800/40"
            onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
            }}
        >
            <Input
                className="flex-1 rounded-md bg-white px-4 py-2 shadow-sm dark:bg-gray-950"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
            />
            <Button className="ml-2" onClick={sendMessage}>
                <SendIcon className="h-5 w-5" />
                <span className="sr-only">Send</span>
            </Button>
        </div>
    );
}

export default SendChatMessage;
