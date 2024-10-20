type Props = {
  name: string;
  profilePicture: string;
  lastMessage?: string | null;
  isOnline: boolean;
  isSelected: boolean;
};

export default function ChatCard({
  name,
  profilePicture,
  lastMessage,
  isOnline,
  isSelected,
}: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${isSelected ? "bg-gray-100" : "bg-white"} px-4 py-3 transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800`}
      onClick={() => console.log("ChatCard Clicked")}
    >
      <img
        alt="Avatar"
        className="h-10 w-10 rounded-full"
        height={40}
        src={
          profilePicture.startsWith("/") ? profilePicture : "/" + profilePicture
        }
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width={40}
      />
      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {lastMessage || "No messages yet"}
        </p>
      </div>
      {isOnline && <span className="h-2 w-2 rounded-full bg-blue-500" />}
    </div>
  );
}
