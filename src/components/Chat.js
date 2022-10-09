import React from "react";
import ChatBox from "./ChatBox";
import ChatSidebar from "./ChatSidebar";

export default function Chat() {
  return (
    <div>
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <ChatSidebar />
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}
