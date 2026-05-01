// App.tsx
import React, {useState} from "react";
import { useCalculator } from "./hooks/useCalculator";
import { TableHeader } from "./components/TableHeader";
import { TableRow } from "./components/TableRow";
import { TableFooter } from "./components/TableFooter";
import { AddButton } from "./components/AddButton";
import { EmptyState } from "./components/EmptyState";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePickerModule from "react-multi-date-picker";

// @ts-expect-error   ,,,
const DatePicker = DatePickerModule.default || DatePickerModule;

const App: React.FC = () => {
  const [date, setDate] = useState(null);
  const {
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
  } = useCalculator();

  return (
    <div
      className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-2 sm:p-3 md:p-4"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        {/* هدر و دکمه افزودن ردیف */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-3">
          <AddButton onClick={addNewRow} />
        </div>

        <div className="mb-3 flex justify-start">
          <DatePicker
            value={date}
            onChange={setDate}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            inputClass="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="انتخاب تاریخ"
          />
        </div>

        {/* جدول */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <TableHeader
                colLabels={colLabels}
                setColLabels={setColLabels}
                operator={operator}
                setOperator={setOperator}
              />
              <tbody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    row={row}
                    operator={operator}
                    computeResult={computeResult}
                    formatResult={formatResult}
                    updateRow={updateRow}
                    deleteRow={deleteRow}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* پیام خالی بودن */}
          {rows.length === 0 && <EmptyState />}
        </div>

        {/* فوتر اطلاعات */}
        <TableFooter
          operatorSymbol={operatorSymbol}
          operator={operator}
          rowCount={rows.length}
        />

        <button
          onClick={() => window.print()}
          className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm"
        >
          ذخیره به PDF
        </button>
      </div>
    </div>
  );
};

export default App;
