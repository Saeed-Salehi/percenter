// components/EmptyState.tsx
import React from "react";

export const EmptyState: React.FC = () => {
  return (
    <div className="py-6 text-center text-slate-400 text-xs sm:text-sm">
      ردیفی وجود ندارد. برای شروع روی "افزودن ردیف" کلیک کنید.
    </div>
  );
};
