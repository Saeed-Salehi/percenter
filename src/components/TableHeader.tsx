// components/TableHeader.tsx
import React from "react";
import type { ColLabels, MathOperator } from "../types";

interface TableHeaderProps {
  colLabels: ColLabels;
  setColLabels: React.Dispatch<React.SetStateAction<ColLabels>>;
  operator: MathOperator;
  setOperator: React.Dispatch<React.SetStateAction<MathOperator>>;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  colLabels,
  setColLabels,
  operator,
  setOperator,
}) => {
  return (
    <thead className="bg-slate-50 border-b-2 border-slate-200">
      <tr>
        <th className="px-1 sm:px-2 py-2 text-right font-semibold text-slate-700 w-[22%]">
          <input
            type="text"
            value={colLabels.col1}
            onChange={(e) =>
              setColLabels((prev) => ({ ...prev, col1: e.target.value }))
            }
            className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="عنوان"
          />
        </th>
        <th className="px-1 sm:px-2 py-2 text-right font-semibold text-slate-700 w-[18%]">
          <input
            type="text"
            value={colLabels.col2}
            onChange={(e) =>
              setColLabels((prev) => ({ ...prev, col2: e.target.value }))
            }
            className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="مقدار اول"
          />
        </th>
        <th className="px-1 sm:px-2 py-2 text-right font-semibold text-slate-700 w-[18%]">
          <input
            type="text"
            value={colLabels.col3}
            onChange={(e) =>
              setColLabels((prev) => ({ ...prev, col3: e.target.value }))
            }
            className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="مقدار دوم"
          />
        </th>
        <th className="px-1 sm:px-2 py-2 text-right font-semibold text-slate-700 w-[42%]">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value as MathOperator)}
              className="w-[60px] sm:w-[80px] px-1 py-1 text-xs sm:text-sm border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none cursor-pointer"
            >
              <option value="%">نسبت</option>
              <option value="+">مجموع</option>
              <option value="-">تفاضل</option>
              <option value="*">ضرب</option>
              <option value="/">تقسیم</option>
            </select>
          </div>
        </th>
      </tr>
    </thead>
  );
};
