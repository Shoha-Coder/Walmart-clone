import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-around space-x-4 mx-auto space-y-4 lg:space-y-0">
      <div className="flex space-x-4">
        <div className="hidden lg:inline space-y-4 w-[150px]">
          <Skeleton className="w-[150px] h-[150px] rounded-md" />
          <Skeleton className="w-[150px] h-[150px] rounded-md" />
          <Skeleton className="w-[150px] h-[150px] rounded-md" />
        </div>
        <Skeleton className="inline lg:hidden w-[200px] h-[200px] rounded-md" />
        <Skeleton className="hidden lg:inline w-[500px] h-[400px] rounded-md" />
      </div>
      <div className="w-[400px] h-[500px] sm:w-[520px] sm:h-[780px] lg:w-1/2 rounded-md space-y-2 border p-2 animate-pulse">
        <Skeleton className="w-[380px] h-[40px] sm:w-[500px] lg:w-full rounded-md" />
        <Skeleton className="w-[380px] h-[40px] sm:w-[300px] lg:w-3/4 rounded-md" />
        <Skeleton className="w-[380px] h-[385px] sm:h-[650px] lg:w-full sm:w-[500px] rounded-md" />
      </div>
    </div>
  );
};

export default Loading;
