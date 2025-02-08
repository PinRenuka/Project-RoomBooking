import React, { useState } from "react";

const selectedFloor = () => {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isFloorOpen, setIsFloorOpen] = useState(false);
  const [isRoomOpen, setIsRoomOpen] = useState(false);

  const floors = [1, 3, 4];
  const rooms = {
    1: ["Room 1/3", "Room 1/5"],
    3: ["Room 3/1", "Room 3/2","Room 3/3","Room 3/4"],
    4: ["Room 4/1", "Room 4/2"],
  };

  return (
    <div className="flex gap-4">
      {/* Floor Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsFloorOpen(!isFloorOpen)}
          className="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {selectedFloor ? `Floor ${selectedFloor}` : "Floor"} ▼
        </button>
        {isFloorOpen && (
          <div className="absolute w-32 bg-white border rounded-lg shadow-lg mt-1">
            {floors.map((floor) => (
              <div
                key={floor}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setSelectedFloor(floor);
                  setSelectedRoom(null); // Reset room when changing floor
                  setIsFloorOpen(false);
                }}
              >
                {floor}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Room Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsRoomOpen(!isRoomOpen)}
          className="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={!selectedFloor}
        >
          {selectedRoom ? selectedRoom : "Room"} ▼
        </button>
        {isRoomOpen && selectedFloor && (
          <div className="absolute w-32 bg-white border rounded-lg shadow-lg mt-1">
            {rooms[selectedFloor].map((room) => (
              <div
                key={room}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setSelectedRoom(room);
                  setIsRoomOpen(false);
                }}
              >
                {room}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default selectedFloor;