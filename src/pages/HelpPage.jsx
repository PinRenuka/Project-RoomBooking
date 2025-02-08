import React from "react";
import Navbar from "../Components/Navbar";

const HelpPage = () => {
  return (
    <div className="h-screen bg-[url(./img/Pic-sit.png)] bg-cover bg-center text-black">

      <div className="max-w-screen-lg mx-auto px-6 pt-10 bg-white rounded-4xl mt-7 p-7">
        <h1 className="font-bold text-4xl">About MRBS</h1>

        <p className="text-2xl mt-6">
          <strong>SIT Room Booking System / ระบบจองห้อง:</strong>
        </p>
        
        <p className="mt-2">
          การเข้าใช้ระบบจองห้อง สามารถเลือกประเภทการจองได้ดังนี้:
        </p>

        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>📅 <strong>จองวันเดียว (None)</strong> - เหมาะสำหรับการจองทั่วไป เช่น ห้องประชุม</li>
          <li>📆 <strong>จองรายวัน (Daily)</strong></li>
          <li>🗓️ <strong>จองรายสัปดาห์ (Weekly)</strong> - เหมาะกับการจองหลายสัปดาห์ เช่น ห้องเรียน</li>
          <li>📅 <strong>จองรายเดือน (Monthly)</strong></li>
          <li>📆 <strong>จองรายปี (Yearly)</strong></li>
        </ul>

        <p className="mt-6 font-bold text-xl">📌 เกิดอะไรขึ้นถ้ามีคนจองห้องพร้อมกัน?</p>
        <p className="mt-2">
          ใครกด <strong>Apply</strong> เป็นคนแรก จะได้สิทธิ์จองห้อง โดยระบบจะตรวจสอบตาม <strong>Timestamp</strong>  
        </p>
        <p className="mt-2">
          ในแต่ละภาคการศึกษา นักบริการการศึกษาของคณะฯ จะมีสิทธิ์จองห้องก่อนเพื่อใช้ในการจัดตารางเรียน  
          จากนั้นระบบจะเปิดให้บุคลากรท่านอื่น ๆ ได้จองห้องต่อไป
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
