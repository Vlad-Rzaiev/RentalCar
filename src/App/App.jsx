import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";
import { Layout } from "../components/Layout/Layout";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CarDetailsPage = lazy(
  () => import("../pages/CarDetailsPage/CarDetailsPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

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

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
};

export default App;
