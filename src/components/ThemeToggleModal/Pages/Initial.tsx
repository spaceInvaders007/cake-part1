import { Dispatch, SetStateAction } from "react";
import { Page } from "../ThemeToggleModal";

interface Props {
  setPage: Dispatch<SetStateAction<Page>>;
  handleClose: VoidFunction;
}

export const Initial = ({ setPage, handleClose }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3>Hello Stranger</h3>
        <p>This is a 2 step process to change the theme. If you want to proceed go to the next modal</p>
      </div>
      <div className="modal-footer">
        <button className="secondary-button" onClick={() => handleClose()}>
          Close this modal
        </button>
        <button className="primary-button" onClick={() => setPage(Page.Action)}>
          Go to next modal
        </button>
      </div>
    </div>
  );
};
