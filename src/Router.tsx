import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Landing } from "./pages/Landing";
import { CodigoConduta } from "./pages/CodigoConduta";
import { Cronograma } from "./pages/Cronograma";
import { NotFound } from "./pages/NotFound";
//import { Maintenance } from "./pages/Maintenance";

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Maintenance />} /> */}

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/cdc" element={<CodigoConduta />} />
        <Route path="/cronograma" element={<Cronograma />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
