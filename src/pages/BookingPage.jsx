import React, { useState, useEffect } from "react";

const CalendarBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        "http://helloworld09.sit.kmutt.ac.th:3000/api/getALLBooking"
      );
      if (!response.ok) {
        throw new Error("Some Thing went Wrong");
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 
  const bookingDates = new Set();
  bookings.forEach((booking) => {
    const bookingDate = new Date(booking.booking_date);
    if (
      bookingDate.getMonth() === currentMonth &&
      bookingDate.getFullYear() === currentYear
    ) {
      bookingDates.add(bookingDate.getDate());
    }
  });

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="bg-[url(./img/Pic-sit.png)] flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[700px] p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <button
            onClick={prevMonth}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          >
            Prev
          </button>
          <h2 className="text-xl font-semibold">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            onClick={nextMonth}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="font-bold">Sun</div>
          <div className="font-bold">Mon</div>
          <div className="font-bold">Tue</div>
          <div className="font-bold">Wed</div>
          <div className="font-bold">Thu</div>
          <div className="font-bold">Fri</div>
          <div className="font-bold">Sat</div>

          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-12"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            return (
              <div
                key={day}
                className={`h-12 flex justify-center items-center ${
                  bookingDates.has(day) ? "bg-red-400 text-white" : ""
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
