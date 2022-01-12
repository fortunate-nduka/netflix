import { Fragment } from "react";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<search />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
