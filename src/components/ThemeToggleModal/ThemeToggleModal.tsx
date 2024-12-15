import Dialog from "@mui/material/Dialog";
import "./ThemeToggleModal.css";
import { useState } from "react";
import { Action } from "./Pages/Action";
import { Initial } from "./Pages/Initial";

interface Props {
  open: boolean;
  handleClose: VoidFunction;
}

export enum Page {
  Initial,
  Action,
}

export const ThemeToggleModal = ({ open, handleClose }: Props) => {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState<Page>(Page.Initial);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    handleClose();
    // adding this timeout as it was glitching the first modal briefly if not
    setTimeout(() => {
      setPage(Page.Initial);
    }, 300);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {
        {
          [Page.Initial]: (
            <Initial setPage={setPage} handleClose={handleClose} />
          ),
          [Page.Action]: (
            <Action handleClose={handleClose} toggleTheme={toggleTheme} />
          ),
        }[page]
      }
    </Dialog>
  );
};
