import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="warningModalBG">
      <div className="modalContainer">
        {/* 3 Sectors: Modal Icon, Modal Text, Cancel Button */}
        <div className="upperContainer">
          <div className="titleCloseBtn">
            {" "}
            <button onClick={() => closeModal(false)}> x </button>{" "}
          </div>
          <div className="warningImg"></div>
          <div className="title"> Warning </div>
        </div>
        <div className="lowerContainer">
          <div className="subtitle">
            {" "}
            Page is best viewed on Desktop or Tablet only.{" "}
          </div>
          <div className="footer">
            {" "}
            <button onClick={() => closeModal(false)}>Cancel</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
