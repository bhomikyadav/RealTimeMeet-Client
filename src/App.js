import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1/Page1";
import { Toaster } from "react-hot-toast";
import Realtimestate from './context/RealtimeState.js'

function App() {
  return (
    <>
    <Realtimestate>
        <div className="app">
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
            }}
          />

          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/join/:roomId" element={<Page1 />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        </Realtimestate>
    
    </>
  );
}

export default App;
