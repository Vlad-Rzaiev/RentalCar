import { Route, Routes } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { CarDetailsPage } from "../pages/CarDetailsPage/CarDetailsPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <AppBar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
