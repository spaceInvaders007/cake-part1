import cakeLogo from "./assets/cake.svg";
import "./App.css";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Switch theme" } };

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };
  
  return (
    <>
      <div className="header">
        <img src={cakeLogo} alt="cake logo" className="cake-logo"/>
      </div>
      <h2 className="welcome-heading">Welcome</h2>
      <div className="content-container">
        <h5>Change the mood</h5>
        <p className="content-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mi eu
          massa imperdiet aliquam.
        </p>
        <div className="switch-container">
          <span className="theme-label">Light</span>
          <Switch
            {...label}
            defaultChecked
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="theme-label">Dark</span>
        </div>
      </div>
    </>
  );
}

export default App;
