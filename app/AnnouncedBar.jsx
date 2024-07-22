import React from "react";

function AnnouncedBar({ text, onClick }) {
  return (
    <div
      style={{
        position: "top",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <span>{text}</span>
      <button
        onClick={onClick}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Get Discount
      </button>
    </div>
  );
}

export default AnnouncedBar;
