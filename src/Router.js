import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateThread from "./pages/CreateThread";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<CreateThread />} />
      </Routes>
    </BrowserRouter>
  );
};
