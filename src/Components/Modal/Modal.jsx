import React from "react";
import PropTypes from "prop-types"; // ES6
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalWrapper = ({ children, open, setOpen }) => {
  return open ? (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      classNames={{
        modal: "customModal",
        overlay: "customOverlay",
      }}
    >
      {children}
    </Modal>
  ) : (
    <>{children}</>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalWrapper;
