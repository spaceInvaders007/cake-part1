import "./App.css";
import { ThemeToggleModal } from "./components/ThemeToggleModal/ThemeToggleModal";
import { Header } from "./components/Header/Header";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";
import { useState } from "react";
import { EasterEgg } from "./components/EasterEgg/EasterEgg";
import ChildCounter from "./components/ChildCounter/ChildCounter";

function App() {
  const [modalOpened, setModalOpen] = useState<boolean>(false);

  return (
    <ChildCounter>
      <ThemeToggleModal
        open={modalOpened}
        handleClose={() => setModalOpen(false)}
      />
      <Header />
      <ContentContainer
        handleOpenModal={() => setModalOpen(true)}
        modalOpened={modalOpened}
      />
      <EasterEgg />
    </ChildCounter>
  );
}

export default App;
