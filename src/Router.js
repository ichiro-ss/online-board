import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateThread from "./pages/CreateThread";
import ThreadPosts from "./pages/ThreadPosts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<CreateThread />} />
        <Route path="/thread/:thread_d" element={<ThreadPosts />} />
      </Routes>
    </BrowserRouter>
  );
};
