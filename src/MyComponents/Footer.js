import React from "react";

export const Footer = () => {
  let FooterStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "2px solid red",
  };
  return (
    <footer className="bg-dark text-light py-3" style={FooterStyle}>
      <p className="text-center">CopyRight &copy; Todolist.com</p>
    </footer>
  );
};
