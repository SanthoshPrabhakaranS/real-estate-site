import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Suspense } from "react";
import Layout from "./components/layout";
import Properties from "./pages/properties";
import AddProperty from "./pages/add-properties";
import SingleProperty from "./pages/single-property";
import { ContextProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import Bookings from "./pages/bookings";
import Favourites from "./pages/favourites";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/add-property" element={<AddProperty />} />
              <Route path="/:id" element={<SingleProperty />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
