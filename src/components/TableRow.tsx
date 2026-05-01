// components/TableRow.tsx
import React from "react";
import { Trash2 } from "lucide-react";
import type { MathOperator, RowData } from "../types";
import { isValidNumber, toEnglishDigits } from "../utils/faNumbersToEn";

interface TableRowProps {
  row: RowData;
  operator: MathOperator;
  computeResult: (val1: string, val2: string, op: MathOperator) => string;
  formatResult: (value: string) => string;
  updateRow: (id: string, field: keyof RowData, value: string) => void;
  deleteRow: (id: string) => void;
}

export const TableRow: React.FC<TableRowProps> = ({
  row,
  operator,
  computeResult,
  formatResult,
  updateRow,
  deleteRow,
}) => {
  const rawResult = computeResult(row.value1, row.value2, operator);
  const displayResult =
    operator === "%" ? formatResult(rawResult) + "%" : formatResult(rawResult);

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-1 sm:px-2 py-1.5">
        <input
          type="text"
          value={row.label}
          onChange={(e) => updateRow(row.id, "label", e.target.value)}
          className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-200 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white min-w-[120px]"
          placeholder="نام"
        />
      </td>
      <td className="px-1 sm:px-2 py-1.5">
        <input
          type="text"
          inputMode="decimal"
          value={row.value1}
          onChange={(e) => {
            const val = toEnglishDigits(e.target.value);

            if (isValidNumber(val)) {
              updateRow(row.id, "value1", val);
            }
          }}
          className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-200 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white min-w-[50px]"
          placeholder="۰"
        />
      </td>
      <td className="px-1 sm:px-2 py-1.5">
        <input
          type="text"
          inputMode="decimal"
          value={row.value2}
          onChange={(e) => {
            const val = toEnglishDigits(e.target.value);

            if (isValidNumber(val)) {
              updateRow(row.id, "value2", val);
            }
          }}
          className="w-full px-1.5 py-1 text-xs sm:text-sm border border-slate-200 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white min-w-[50px]"
          placeholder="۰"
        />
      </td>
      <td className="px-1 sm:px-2 py-1.5">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex-1 bg-slate-100 rounded-md px-1.5 py-1 font-mono text-xs sm:text-sm min-w-[50px]">
            <span
              className={`font-medium ${displayResult === "خطا" ? "text-red-600" : "text-slate-800"}`}
            >
              {displayResult}
            </span>
          </div>
          <button
            onClick={() => deleteRow(row.id)}
            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors shrink-0"
            aria-label="حذف ردیف"
          >
            <Trash2 size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};
