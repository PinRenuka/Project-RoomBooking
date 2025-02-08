import React from "react";
import dayjs from "dayjs";

const Table = ({ bookings = [] }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const isBooked = (day, time) => {
    return bookings.find(booking => {
      const start = dayjs(booking.booking_start);
      const end = dayjs(booking.booking_end);
      const slot = dayjs().day(days.indexOf(day)).hour(parseInt(time.split(":")[0])).minute(parseInt(time.split(":")[1]));
      return slot.isAfter(start) && slot.isBefore(end);
    });
  };

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
          {times.map((time, index) => {
            return (
              <tr key={index}>
                <td className="border border-black px-4 py-2 text-center bg-[#3f7fbf] text-white">
                  {time}
                </td>
                {days.map((day, idx) => {
                  const booking = isBooked(day, time);
                  let rowSpan = 1;
                  if (booking) {
                    let nextIndex = index + 1;
                    while (nextIndex < times.length && isBooked(day, times[nextIndex])) {
                      rowSpan++;
                      nextIndex++;
                    }
                  }
                  return (
                    booking && (index === 0 || !isBooked(day, times[index - 1]))) ? (
                      <td
                        key={idx}
                        rowSpan={rowSpan}
                        className={`border border-black px-4 py-2 text-center bg-red-500 text-white`}
                      >
                        {booking.booking_title}
                      </td>
                    ) : (!booking ? (
                      <td key={idx} className={`border border-black px-4 py-2 text-center ${index % 2 === 0 ? "bg-[#E6E6E6]" : "bg-[#B3B3B3]"}`}></td>
                    ) : null);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;