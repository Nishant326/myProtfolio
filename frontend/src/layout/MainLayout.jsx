import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";

const MainLayout = () => {
  let bacGroundImage = "/assests/image/bg2.png";

  return (
    // REMOVE 'bg-[#0a0a0a]' from here to see if the image appears
    <div className="relative min-h-screen w-full"> 
      <div
        className="fixed inset-0 z-1  bg-cover bg-center bg-no-repeat" // Changed z-[-1] to z-0
        style={{ backgroundImage: `url(${bacGroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10"> {/* Wrap everything else in a higher z-index */}
        <Navbar />
        <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;