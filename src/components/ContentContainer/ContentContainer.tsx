import Switch from "@mui/material/Switch";
import "./ContentContainer.css";

const label = { inputProps: { "aria-label": "Switch theme" } };

interface Props {
  modalOpened: boolean;
  handleOpenModal: VoidFunction;
}

export const ContentContainer = ({ modalOpened, handleOpenModal }: Props) => {
  return (
    <>
      <h2 className="welcome-heading">Welcome</h2>
      <div className="content-container">
        <h5>Change the mood</h5>
        <p className="content-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mi eu
          massa imperdiet aliquam.
        </p>
        <div className="switch-container">
          <span className="theme-label">Light</span>
          <Switch {...label} checked={modalOpened} onChange={handleOpenModal} />
          <span className="theme-label">Dark</span>
        </div>
      </div>
    </>
  );
};
