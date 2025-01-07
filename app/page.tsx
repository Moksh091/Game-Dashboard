import { Navbar } from "./components/Navbar";
import { RightContent } from "./components/RightContent";
import { Valo } from "./Page/Valo";
export default function App() {
  return (
    <main>
      {<Navbar />}
      <div className="grid grid-cols-6">
        <div className="col-span-4">{<Valo />} </div>
        <div className="col-span-2 ml-4">{<RightContent />}</div>
      </div>
    </main>
  );
}
