import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from './App.tsx'
import {Index} from "./pages";
import {HomeWork1} from "./pages/home-1.tsx";
import {UseHover} from "./pages/use-hover.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<App />}>
              <Route index element={<Index/>}/>
              <Route path={'use-fetch'} element={<HomeWork1/>}/>
              <Route path={'use-hover'} element={<UseHover/>}/>
          </Route>
      </Routes>

  </BrowserRouter>,
)
