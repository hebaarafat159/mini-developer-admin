import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import HeaderComponent from './components/HeaderComponent';
import CourseDetails from './pages/CourseDetails';
import Footer from './components/Footer';
import Register from './pages/Register';
import ConfirmationPage from './pages/ConfirmationPage';
import TermDates from './pages/TermDates';
import ConsentForm from './pages/ConsentForm';
import Testimonials from './pages/Testimonials';
import { HelmetProvider } from "react-helmet-async";
import AddTestimonial from './pages/addTestimonial';
import AddCourse from './pages/EditCourse';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className={'routes-container'}>
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/our-courses/:id" element={<CourseDetails />} />
            <Route path="/sign-up-form/:courseId" element={<Register />} />
            <Route path="/confirmation/:pageTitle" element={<ConfirmationPage />} />
            <Route path="/term-dates" element={<TermDates />} />
            <Route path="/consent-form/:studentId" element={<ConsentForm />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/add-testimonial" element={<AddTestimonial />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/edit-course/:courseId" element={<AddCourse />} />
          </Routes>
        </div>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
