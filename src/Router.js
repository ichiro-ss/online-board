import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateThread from "./pages/CreateThread";
import Thread from "./pages/Thread";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<CreateThread />} />
        <Route path="/thread/:thread_id" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};
