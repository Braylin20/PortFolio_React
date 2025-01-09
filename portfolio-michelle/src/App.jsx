import './App.css';
import {AppRouter} from "./router/AppRouter.jsx";
import {SideBar} from "./components/SideBar.jsx";

// Snowflake Component


function App() {
    return (
        <>
            <div className="relative h-screen flex gap-16 rounded-lg  bg-white overflow-hidden">
                <SideBar/>
                <AppRouter/>
            </div>
        </>
    );
}


export default App
