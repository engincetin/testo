import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoldenTicket } from "./pages/GoldenTicket";
import { Home } from "./pages/Home";

function App() {

    return (
		<BrowserRouter>
			<Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/golden-ticket' element={<GoldenTicket />} />
			</Routes>
		</BrowserRouter>
    );
}

export default App;