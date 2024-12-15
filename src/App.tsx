import "./App.css";
import { ThemeToggleModal } from "./components/ThemeToggleModal/ThemeToggleModal";
import { Header } from "./components/Header/Header";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";
import { useState } from "react";

function App() {
  const [modalOpened, setModalOpen] = useState<boolean>(false);;

  return (
    <>
      <ThemeToggleModal
        open={modalOpened}
        handleClose={() => setModalOpen(false)}
      />
      <Header />
      <ContentContainer handleOpenModal={() =>  setModalOpen(true)} modalOpened={modalOpened} />
    </>
  );
}

export default App;
