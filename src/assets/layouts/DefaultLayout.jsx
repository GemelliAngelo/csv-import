import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="bg-body-tertiary py-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
