import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaygroundProvider } from './Contexts';
import Home from './pages/home';

export default function App(){
  return(
    <>  
     <BrowserRouter>
        <PlaygroundProvider>
          <Routes>
            <Route path = "/" element = {<Home />} />
          </Routes>
        </PlaygroundProvider>
      </BrowserRouter>
    </>
  )
}


