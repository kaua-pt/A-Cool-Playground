import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaygroundProvider } from './Contexts';
import Home from './pages/home';
import Global from "./GlobalStyle";

export default function App(){
  return(
    <>  
      <Global>
        <BrowserRouter>
          <PlaygroundProvider>
            <Routes>
              <Route path = "/" element = {<Home />} />
            </Routes>
          </PlaygroundProvider>
        </BrowserRouter>
      </Global>
    </>
  )
}


