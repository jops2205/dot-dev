import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-2xl px-6 flex flex-col">
        <Header />
        <main className="my-10 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};