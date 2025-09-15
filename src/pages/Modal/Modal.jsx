import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <img src={member.img} alt={member.name} />
          <div>
            <h2>{member.name}</h2>
            <span className="role">{member.role}</span>
          </div>
        </div>

        <blockquote className="bio-quote">“{member.quote}”</blockquote>

        <div className="bio-details">
          <div className="scrolbar">
            <p>{member.description}</p>
            <p>{member.p1}</p>
            <p>{member.p2}</p>
            <p>{member.p3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
