// components/AddButton.tsx
import React from "react";
import { Plus } from "lucide-react";

interface AddButtonProps {
  onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg shadow-sm transition-all duration-200 w-full sm:w-auto justify-center"
    >
      <Plus size={14} />
      افزودن ردیف
    </button>
  );
};
