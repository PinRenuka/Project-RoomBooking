import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="legend">
        <span className="lecture">Lecture</span>
        <span className="staff">Staff</span>
        <span className="student">Student</span>
        <span className="lf">LF</span>
      </div>
      <p>
        All room reservation and service requests should be made at least <b>24 hours</b> in advance.
        If your request is urgent, please contact our helpdesk at <b>0-2470-9820</b> or email <b>servicedesk@sit.kmutt.ac.th</b>.
      </p>
    </footer>
  );
};

export default Footer;
