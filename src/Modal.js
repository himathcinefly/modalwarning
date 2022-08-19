import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
      <div className="modalContainer">
        {/* 3 Sectors: Modal Icon, Modal Text, Cancel Button */}
          <div className="titleCloseBtn">
            {" "}
            <button onClick={() => closeModal(false)}> <div className="buttonX">✖ </div> </button>{" "}
          </div>
          <div className="warningImg"> <img src={require('./rsz_1warning.png')} alt='warning' /></div>
          <div className="title"> Warning </div>
          <div className="subtitle">
            {" "}
            Page is best to be viewed on Desktop or Tablet only.{" "}
          </div>
          <div className="footer">
            {" "}
            <button onClick={() => closeModal(false)}>Cancel</button>{" "}
          </div>
      </div>
  );
}
export default Modal;
