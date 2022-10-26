// import logo from './logo.svg';
// import SoonPage from './pages/tambahan/Soon';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
// import FinishPage from './pages/tambahan/Finish';

import './App.css';
import Layout from "./layout";
import HomePage from './pages/beranda/Home';
import Struktur from "./pages/struktur/CommitteeStructure";
import Document from "./pages/berkas/Document";
import Timeline from "./pages/linimasa/Timeline";
import DetailPoint from "./pages/cekpoin/DetailCheckpoint";
import Submission from "./pages/tugas/Submission";
import DetailSubmission from "./pages/tugas/DetailSubmission";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="document" element={<Document />} />
                    <Route path="timeline" element={<Timeline />} />
                    <Route path="point" element={<DetailPoint />} />
                    <Route path="struktur" element={<Struktur />} />
                    <Route path="submission" element={<Submission />} />
                    <Route path="submission/:id" element={<DetailSubmission />} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
      {/* <SoonPage /> */}
      {/* <FinishPage /> */}
    </div>
  );
}

export default App;
