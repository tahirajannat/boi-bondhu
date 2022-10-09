import React from "react";
import { ChatDataUsers } from "../data";
import ChatBox from "./ChatBox";

export default function Chat() {
  return (
    <div>
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {ChatDataUsers.map((user, index) => (
                  <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                    <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      {user.short_name}
                    </div>
                    <div class="ml-2 text-sm font-semibold">
                      {user.full_name}
                    </div>
                  </button>
                ))}
              </div>
              <div class="flex flex-row items-center justify-between text-xs mt-6">
                <span class="font-bold">Archivied</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  7
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2">
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}
