import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/SideBar";

export default function App() {
   return(
      <div className="page-wrapper">
         <Sidebar />
         <MainContent />
      </div>
   )
}