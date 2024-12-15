import cakeLogo from "./assets/cake.svg";
import "./App.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  return (
    <>
      <div className="header">
        <img src={cakeLogo} alt="cake logo" />
      </div>
      <h2 className="welcome-heading">Welcome</h2>
      <div className="content-container">
        <h5>Change the mood</h5>
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mi eu
          massa imperdiet aliquam.
        </p>
        <div className="switch-container">
          <span className="theme-label">Light</span>
          <Switch {...label} defaultChecked />
          <span className="theme-label">Dark</span>
        </div>
      </div>
    </>
  );
}

export default App;
