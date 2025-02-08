import React from "react";

const Table = () => {
  // สัปดาห์
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // เวลา
  const times = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"];

  return (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2 bg-gray-300">Time/Day</th>
            {days.map((day, index) => (
              <th key={index} className="border border-black px-4 py-2 bg-[#3f7fbf] text-white">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2 text-center bg-[#3f7fbf] text-white">
                {time}
              </td>
              {days.map((_, idx) => (
                <td key={idx} className={`border border-black px-4 py-2 ${index % 2 === 0 ? "bg-[#E6E6E6]" : "bg-[#B3B3B3]"}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
