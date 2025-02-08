import React from "react";
import Lecbutt from "./Lecbutt";
import Stabutt from "./Stabutt";
import Stubutt from "./Stubutt";
import Lfbutt from "./Lfbutt";



export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white px-4 py-6  ">
      
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <Lecbutt />
        <Stabutt />
        <Stubutt />
        <Lfbutt />
      </div>

     
      <div className="grid md:grid-cols-2 gap-8">
       
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">
            เพื่อให้การ Infrastructure สามารถให้บริการการใช้ห้องได้อย่างมีประสิทธิภาพ ขอความร่วมมือผู้ต้องการใช้ห้อง ทำการจองล่วงหน้า อย่างน้อย
            24 ชม. หากต้องการใช้ห้องในเวลาที่กระชั้นชิดหรือการนัดหมายเกิดขึ้นที่ helpdesk โดยตรง หรือที่ 0-2470-9550 หรือ e-mail ที่{" "}
            <a href="mailto:servicedesk@sit.kmutt.ac.th" className="text-red-400 hover:underline">
              servicedesk@sit.kmutt.ac.th
            </a>
          </p>
          <p className="text-sm leading-relaxed">
            ทั้งนี้หากมีการทำการจองห้องหรือใช้ห้องในช่วงเวลาทำการปกติ ทางด้าน Infrastructure อาจไม่สามารถให้บริการได้
          </p>
        </div>

        
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">
            All room reservation and service request should be made at least{" "}
            <span className="text-red-400">24 hours</span> in advance. If your request is urgent, please contact our
            helpdesk directly{" "}
            <a href="tel:0-2470-9550" className="text-red-400 hover:underline">
              0-2470-9550
            </a>{" "}
            or e-mail{" "}
            <a href="mailto:servicedesk@sit.kmutt.ac.th" className="text-red-400 hover:underline">
              servicedesk@sit.kmutt.ac.th
            </a>
          </p>
          <p className="text-sm leading-relaxed">
            Please note that if your request or reservation is outside the normal service hours, our staff may not be
            able to provide the service at the requested time.
          </p>
        </div>
      </div>
    </footer>
  )
}

