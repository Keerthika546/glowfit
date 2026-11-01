import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSelector from "./components/MoodSelector";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <MoodSelector></MoodSelector>
        <div className="w-full max-w-8xl mx-auto px-4 flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-full md:w-64">
                <SearchBar />
            </div>
            <CategoryFilter />
            <button className="md:ml-auto md:mt-5 flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-2 text-sm text-green-950 whitespace-nowrap w-fit">
                <i className="fa-solid fa-heart text-orange-500"></i>
                My Favorites
            </button>
        </div>
        <ImageGallery></ImageGallery>
        <Footer></Footer>
    </div>
  );
}

export default App;