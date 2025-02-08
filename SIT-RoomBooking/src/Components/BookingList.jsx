import dayjs from "dayjs"

export default function BookingList({ bookings =[]}) {
  return (
    <div className="bg-slate-600 p-4 rounded-lg min-h-[300px] w-[280px]">
      {bookings.map((booking, index) => {
        const startTime = dayjs(booking.booking_start).format("HH:mm")
        const endTime = dayjs(booking.booking_end).format("HH:mm")

        return (
          <div key={index} className="mb-2 last:mb-0">
            <div className="bg-rose-500 text-white p-2 rounded">
              <h3 className="font-medium text-sm">{booking.booking_title}</h3>
              <p className="text-xs opacity-90">
                {startTime} - {endTime}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}