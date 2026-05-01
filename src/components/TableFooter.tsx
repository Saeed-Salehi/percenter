// components/TableFooter.tsx
import React from "react";
import type { MathOperator } from "../types";

interface TableFooterProps {
  operatorSymbol: Record<MathOperator, string>;
  operator: MathOperator;
  rowCount: number;
}

export const TableFooter: React.FC<TableFooterProps> = ({
  operatorSymbol,
  operator,
  rowCount,
}) => {
  const operatorName = {
    "+": "جمع",
    "-": "تفریق",
    "*": "ضرب",
    "/": "تقسیم",
  };

  return (
    <div className="mt-2 text-[10px] sm:text-xs text-slate-500 flex flex-wrap justify-between items-center gap-1">
      <div className="flex items-center gap-2">
        <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 no-print">
          {operatorSymbol[operator]} {operatorName[operator]}
        </span>
        <span className="text-slate-400">{rowCount} ردیف</span>
      </div>
      <div className="text-slate-400 no-print">نتایج خودکار</div>
    </div>
  );
};
