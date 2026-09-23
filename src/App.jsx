import BusinessModel from "./components/BusinessModel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from './components/Hero';
import Market from "./components/Market";
import Overview from "./components/Overview";
import Problem from "./components/Problem";
import Products from "./components/Products";
import Team from "./components/Team";
import Traction from "./components/Traction";
import Vision from "./components/Vision";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Problem />
      <Products />
      <Market />
      <BusinessModel />
      <Traction />
      <Vision />
      <Team />
      <Footer />
    </>
  )
}

export default App
