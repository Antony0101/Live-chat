import { Button } from "../../ui/button";
import { ChevronLeft } from "lucide-react";

// function arraysEqual(a: any[], b: any[]) {
//   a.sort();
//   b.sort();

//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length !== b.length) return false;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }

//   return true;
// }

export default function ChatHeader() {
  // console.log("Online True: ", onlineUsers.includes(selectedChat));
  const isnoChatSelected = false;
  const isOnline = true;
  if (isnoChatSelected) return <></>;

  return (
    <div className="flex h-[10vh] items-center border-b bg-gray-100/40 px-4 dark:border-gray-800 dark:bg-gray-800/40 w-full">
      <div className="md:hidden pr-5">
        <Button
          size="icon"
          variant="ghost"
          className="border"
          onClick={() => console.log("Mobile Menu Clicked")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <img
          alt="Avatar"
          className="h-10 w-10 rounded-full"
          height={40}
          src={
            // selectedChat?.profilePicture.startsWith("/")
            //   ? selectedChat?.profilePicture
            //   : "/" + selectedChat?.profilePicture
            "/profiles/1697107.png"
          }
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div>
          <h4 className="font-medium">{"Name"}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isOnline ? "Online" : ""}
          </p>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        {/* {selectedChat.userId === "" && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost">
                <PlusIcon className="h-5 w-5" />
                <span className="sr-only">New Group</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Manage Group Members</DialogTitle>
              </DialogHeader>
              <div className="pt-2">
                <MultiSelect
                  options={userListUpdated}
                  onValueChange={(value) => setGroupUsers(value)}
                  defaultValue={groupUsers}
                  placeholder="Select users"
                  variant="inverted"
                  animation={0}
                  maxCount={3}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={onSave}
                  disabled={arraysEqual(groupOriginalUsers, groupUsers)}
                >
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )} */}
        {/* <Button size="icon" variant="ghost">
                        <SettingsIcon className="h-5 w-5" />
                        <span className="sr-only">Group Settings</span>
                    </Button> */}
      </div>
    </div>
  );
}
