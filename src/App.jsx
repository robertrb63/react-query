import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Router } from "./Router";
import Page404 from "./pages/Page404";
import searchPage from "./pages/searchPage";


const appRoutes = [
  { 
    path: "/", 
    Component: HomePage },
  { 
    path: "/about", 
    Component: AboutPage },
  { 
    path: "/search/:query", 
    Component: searchPage 
  },
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}
      />
    </main>
  );
}
export default App;
