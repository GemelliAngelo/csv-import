import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import IndexPage from "./assets/pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
