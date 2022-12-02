import ContactUS from './components/features/contactUs/ContactUS';
import Footer from './components/features/footer/Footer';
import Gallery from './components/features/gallery/Gallery';
import Navbar from './components/features/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUS />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;