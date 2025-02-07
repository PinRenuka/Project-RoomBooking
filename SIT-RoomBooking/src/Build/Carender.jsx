import { useState, useEffect } from "react";

const Carendar = () => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null); // เก็บวันที่ถูกเลือก

  useEffect(() => {
    setSelectedDate(null); // รีเซ็ตวันที่เลือกเมื่อเปลี่ยนเดือน/ปี
  }, [selectedMonth, selectedYear]);

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const prevMonthDays = new Date(selectedYear, selectedMonth, 0).getDate();

  // สร้างอาเรย์วันที่ (รวมวันจากเดือนก่อนหน้าและเติมให้ครบสัปดาห์)
  const days = [
    ...Array(firstDay).fill(null).map((_, i) => prevMonthDays - firstDay + 1 + i),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  
  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow">
      {/* Dropdown เลือกเดือน-ปี */}
      <div className="flex justify-between items-center mb-4">
        <select
          className="p-2 border rounded"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(selectedYear, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => selectedYear - 5 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* หัวข้อวัน (S, M, T, W, ...) */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="py-2">
            {d}
          </div>
        ))}
      </div>

      {/* วันที่ในเดือน */}
      <div className="grid grid-cols-7 text-center">
        {days.map((day, i) => (
          <div
            key={i}
            className={`py-2 cursor-pointer rounded ${
              day === selectedDate ? "bg-blue-500 rounded text-white" : "text-gray-700"
            } ${day ? "hover:bg-gray-200" : "text-gray-400"}`}
            onClick={() => day && setSelectedDate(day)}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carendar;
