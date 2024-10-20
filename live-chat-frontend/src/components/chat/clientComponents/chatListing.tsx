import { Input } from "../../ui/input";
import SearchIcon from "../../icons/searchIcon";
import ChatCard from "./chatCard";
import { useState } from "react";
import LoaderComponent from "../../svg/loaderComponents";

export default function ChatListing() {
  const [searchValue, setSearchValue] = useState("");
  const isLoading = false;
  const chats = [
    {
      _id: 1,
      name: "hello",
      icon: "/profiles/1697107.png",
      lastMessage: { message: "hello" },
    },
    {
      _id: 2,
      name: "hello",
      icon: "/profiles/1697107.png",
      lastMessage: { message: "hello" },
    },
  ];
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[90vh] w-full">
        {"Loading "}
        <LoaderComponent fill="rgba(0, 0, 0, 0.976)" className="h-8 w-8" />
      </div>
    );
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full rounded-md bg-white px-8 py-2 shadow-sm dark:bg-gray-950"
            placeholder="Search chats..."
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="divide-y dark:divide-gray-800">
        {chats
          .filter((chatobj) => {
            if (searchValue === "") return true;
            const filter = new RegExp(searchValue.split("").join(".*"), "i");
            return filter.test(chatobj.name);
          })
          .map((chat) => (
            <ChatCard
              name={chat.name || ""}
              lastMessage={chat.lastMessage?.message as unknown as string}
              profilePicture={chat.icon || ""}
              key={chat._id}
              isOnline={true}
              isSelected={false}
            />
          ))}
      </div>
    </div>
  );
}
