import Dialog from "@mui/material/Dialog";
import "./ThemeToggleModal.css";
import { useState } from "react";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

export const ThemeToggleModal = ({ open, handleClose }: Props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);

    // I also want to close the modal after changing the theme
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-container">
        <div className="modal-header">
          <h3>Hello, I am a modal</h3>
          <p>By clicking switch, you will toggle the mood</p>
        </div>
        <div className="modal-footer">
          <button className="secondary-button" onClick={() => handleClose()}>
            Secondary button
          </button>
          <button className="primary-button" onClick={() => toggleTheme()}>
            Toggle
          </button>
        </div>
      </div>
    </Dialog>
  );
};
