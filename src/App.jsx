import React from "react";
import NotesPage from "./pages/NotesPage";
import NoteProvider from "./context/NotesContext";
const App = () => {
  return (
    <div id="app">
      <NoteProvider>
        <NotesPage />
      </NoteProvider>
    </div>
  );
};

export default App;
