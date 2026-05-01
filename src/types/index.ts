// types/index.ts
export type MathOperator = "+" | "-" | "*" | "/" | "%";

export interface RowData {
  id: string;
  label: string;
  value1: string;
  value2: string;
}

export interface ColLabels {
  col1: string;
  col2: string;
  col3: string;
}
