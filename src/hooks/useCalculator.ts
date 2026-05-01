// hooks/useCalculator.ts
import { useState } from "react";
import type { MathOperator, RowData } from "../types";

export const useCalculator = () => {
  const [colLabels, setColLabels] = useState({
    col1: "",
    col2: "",
    col3: "",
  });
  const [operator, setOperator] = useState<MathOperator>("%");
  const [rows, setRows] = useState<RowData[]>([
    {
      id: crypto.randomUUID(),
      label: "",
      value1: "",
      value2: "",
    },
  ]);

  const computeResult = (
    val1: string,
    val2: string,
    op: MathOperator,
  ): string => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
      return "—";
    }

    switch (op) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return num2 === 0 ? "خطا" : (num1 / num2).toString();
      case "%":
        return ((num2 / num1) * 100).toString();
      default:
        return "—";
    }
  };

  const formatResult = (value: string): string => {
    if (value === "—" || value === "خطا") return value;
    const num = parseFloat(value);
    if (isNaN(num)) return "—";
    return num.toFixed(2).replace(/\.?0+$/, "");
  };

  const addNewRow = () => {
    const newRow: RowData = {
      id: crypto.randomUUID(),
      label: "",
      value1: "",
      value2: "",
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id: string) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof RowData, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  const operatorSymbol: Record<MathOperator, string> = {
    "%": "%",
    "+": "+",
    "-": "-",
    "*": "×",
    "/": "÷",
  };

  return {
    colLabels,
    setColLabels,
    operator,
    setOperator,
    rows,
    computeResult,
    formatResult,
    addNewRow,
    deleteRow,
    updateRow,
    operatorSymbol,
  };
};
