import './App.css';
import {AppRouter} from "./router/AppRouter.jsx";


// Snowflake Component


function App() {
    return (
        <>
            <div className="flex flex-col gap-16 rounded-lg  bg-white ">
                <AppRouter/>
            </div>
        </>
    );
}


export default App
