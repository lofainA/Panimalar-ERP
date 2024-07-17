import React, { lazy, Suspense, useLayoutEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

const Welcome = lazy(() => import("src/pages/Welcome/Welcome.jsx"))

function App () {
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
        </Routes>
    );
}

export default App;

/* style={{display: "flex", flexDirection: "row", padding:"0", margin:"0", justifyContent:"space-between", width:"100%"}} */