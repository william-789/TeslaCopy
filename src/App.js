import './App.css';
import Navbar from './Components/Navbar';
import TestHero from './Components/Pages/TestHero';
import Sidebar from './Components/Nav/Sidebar';

function App() {
  return (
    <>
    <Navbar />
    <TestHero />
    </>
  );
}
/*
Model 3, Y, S, X, Solar Panels, S Roofs, Acessories
https://stackoverflow.com/questions/62390436/how-to-scroll-fully-to-next-section
Structure:
Navbar,
Sidebar,
Sections(id, bg, title, text, buttons),
Footer
*/
export default App;
