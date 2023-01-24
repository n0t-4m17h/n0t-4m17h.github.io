import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

// import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Utility from '../pages/Utility';
import Gallery from '../pages/Gallery';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        // <AnimatePresence>
            <Routes location={location} key={location.pathname}> 
                <Route exact path='/' element={<Home />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/utility' element={<Utility />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes>
        // </AnimatePresence>
    );
}

export default AnimatedRoutes;