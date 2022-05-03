import './App.css';
import Navbar from './Components/Navbar';
import HeroPages from './Components/Pages/HeroPages';

function App() {
  return (
    <>
    <Navbar />
    <HeroPages />
    </>
  );
}
/*MISSING: Footer, full delayed scroll

Model 3, Y, S, X, Solar Panels, S Roofs, Acessories
https://stackoverflow.com/questions/62390436/how-to-scroll-fully-to-next-section
Structure:
Navbar,
Sidebar,
Sections(id, bg, title, text, buttons),
Footer
*/
export default App;
