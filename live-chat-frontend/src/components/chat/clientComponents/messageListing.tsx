import LoaderComponent from "../../svg/loaderComponents";

type MessageProps = {
  message: string;
  time: string;
  profilePicture: string;
};

function SendedMessage({ message, time, profilePicture }: MessageProps) {
  return (
    <div className="flex justify-end gap-2">
      <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
        <p>{message}</p>
        <p className="mt-1 text-xs text-gray-200">{time}</p>
      </div>
      <img
        alt="Avatar"
        className="h-10 w-10 rounded-full"
        height={40}
        src={profilePicture}
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width={40}
      />
    </div>
  );
}

function ReceivedMessage({ message, time, profilePicture }: MessageProps) {
  return (
    <div className="flex items-end gap-2">
      <img
        alt="Avatar"
        className="h-10 w-10 rounded-full"
        height={40}
        src={profilePicture}
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width={40}
      />
      <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
        <p>{message}</p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
}

export default function MessageListing() {
  const user = {
    _id: 1,
  };
  const isLoading = false;
  const messages = [
    {
      _id: 1,
      message: "hello",
      senderId: {
        _id: 1,
        profilePicture: "/profiles/1697107.png",
      },
      createdAt: new Date(),
    },
    {
      _id: 2,
      message: "hello",
      senderId: {
        _id: 2,
        profilePicture: "/profiles/1697107.png",
      },
      createdAt: new Date(),
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
    <>
      {/* <SendMessage />
            <ReceivedMessage /> */}
      {messages.map((item, index) => {
        const senderId = item.senderId;
        if (senderId._id === user._id) {
          return (
            <SendedMessage
              key={index}
              message={item.message}
              time={new Date(item.createdAt!).toLocaleTimeString()}
              profilePicture={senderId.profilePicture}
            />
          );
        } else {
          return (
            <ReceivedMessage
              key={index}
              message={item.message}
              time={new Date(item.createdAt!).toLocaleTimeString()}
              profilePicture={senderId.profilePicture}
            />
          );
        }
      })}
    </>
  );
}
