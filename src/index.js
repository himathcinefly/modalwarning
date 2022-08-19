import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function checkWindowSize(width) {
  return width <= 600;
}

const Component = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [openModal, setOpenModal] = useState(checkWindowSize(windowSize.innerWidth))
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      setOpenModal(checkWindowSize(windowSize.innerWidth))
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      Width: {windowSize.innerWidth}
      {windowSize.innerWidth <= 600 && openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Component />, rootElement);
