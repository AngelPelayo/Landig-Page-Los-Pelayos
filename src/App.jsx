import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Fondo from './assets/Fondo.png';

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img
                src={Fondo}
                alt="Fondo marino Los Pelayos"
                className="fixed inset-0 w-full h-full object-cover -z-10"
            />
            <div className="relative z-10">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}

export default App;