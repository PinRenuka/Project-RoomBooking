import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";

const PickingPage = () => {
  const [booked_by_name, setName] = useState("");
  const [booking_by_status, setbooking_by_status] = useState("");
  const [booking_date, setDate] = useState(new Date());
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [room_id, setRoom] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");  
  const navigate = useNavigate();
  const path = window.location.pathname.split("/")[2];
  console.log(booked_by_name)
  useEffect(() => {
    setbooking_by_status(path);
  }, [path]);

  const roomOptions = {
    CB2: [
      { id: 1, name: "CB2 - 2301" },
      { id: 2, name: "CB2 - 2304" },
      { id: 3, name: "CB2 - 2305" },
      { id: 4, name: "CB2 - 2306" },
      { id: 5, name: "CB2 - 2308" },
      { id: 6, name: "CB2 - 2312" },
      { id: 7, name: "CB2 - 2313" },
    ],
    LX: [
      { id: 8, name: "LX10 - 10/1" },
      { id: 9, name: "LX10 - 10/2" },
      { id: 10, name: "LX10 - 10/3" },
      { id: 11, name: "LX10 - 10/4" },
      { id: 12, name: "LX10 - 10/5" },
      { id: 13, name: "LX11 - 11/1" },
      { id: 14, name: "LX11 - 11/2" },
      { id: 15, name: "LX11 - 11/3" },
      { id: 16, name: "LX11 - 11/4" },
      { id: 17, name: "LX11 - 11/5" },
      { id: 18, name: "LX12 - 12/1" },
      { id: 19, name: "LX12 - 12/2" },
    ],
    SIT: [
      { id: 20, name: "SIT - Training 1/3" },
      { id: 21, name: "SIT - Training 1/5" },
      { id: 22, name: "SIT - Meeting 3/1" },
      { id: 23, name: "SIT - Meeting 3/2" },
      { id: 24, name: "SIT - Meeting 3/3" },
      { id: 25, name: "SIT - Meeting 3/4" },
      { id: 26, name: "SIT - Meeting 4/2" },
      { id: 27, name: "SIT - Meeting 4/3" },
    ],
  };
  
  const sendData = async () => {
    try {
      const response = await fetch("http://helloworld09.sit.kmutt.ac.th:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booked_by_name,
          booking_by_status,
          room_id,
          booking_date,
          start_time,
          end_time,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      setModalMessage(result.message);  
      setIsModalOpen(true);
      setName("");
      setbooking_by_status("");
      setDate("");
      setStartTime("");
      setEndTime("");
      setRoom("");
    } catch (error) {
      setModalMessage("Error: " + error.message);  
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(./img/Pic-sit.png)]">
      <div className="w-[600px] p-6 bg-slate-800 text-white rounded-2xl shadow-xl">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            value={booked_by_name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-700 rounded-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Booking Day</label>
            <input
              type="date"
              value={booking_date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Room</label>
            <select
              value={room_id}
              onChange={(e) => setRoom(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md"
            >
              <option value="">Select</option>
              {booking_by_status &&
                roomOptions[booking_by_status]?.map((roomOption) => (
                  <option key={roomOption.id} value={roomOption.id}>
                    {roomOption.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Start Time</label>
            <input
              type="time"
              value={start_time}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Time</label>
            <input
              type="time"
              value={end_time}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Booking Status</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {["Lecture", "Student", "Staff", "LF"].map((type) => (
              <label
                key={type}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                  booking_by_status === type ? "bg-red-500" : "bg-gray-700"
                }`}
              >
                <input
                  type="radio"
                  value={type}
                  checked={booking_by_status === type}
                  onChange={() => setbooking_by_status(type)}
                  className="hidden"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            className="bg-red-600 px-6 py-2 rounded-lg"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 px-6 py-2 rounded-lg"
            onClick={sendData}
          >
            Apply
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Booking Status"
        className="bg-gray-800 p-6 rounded-lg text-white"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl">{modalMessage}</h2>
        <button
          className="mt-4 bg-green-600 px-6 py-2 rounded-lg"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default PickingPage;
