import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Message from "./pages/Message.jsx";
import MusicButton from "./components/MusicButton.jsx";

export default function App() {
  return (
    <>
      <MusicButton />
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/message" element={<Message />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
