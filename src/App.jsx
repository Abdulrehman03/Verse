import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Landing from './Pages/Landing';
import './App.css';
import theme from './theme';
import { ShowDetailProvider } from './Context/ShowDetail';

const App = () => {
    return (
        <ShowDetailProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ShowDetailProvider>
    );
};

export default App;
