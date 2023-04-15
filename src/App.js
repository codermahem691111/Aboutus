import logo from './logo.svg';
import './App.css';
import { Cards } from './Cards';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import {History} from './History';
import { Team } from './Team';
import {Doctors} from './Doctors'
import { How } from './How';
import { Dsc } from './Dsc';
import { Testo } from './Testo';
import  {Books} from './Books'
import { About } from './pages/About';
import {Faq}  from './pages/Faq'
import { Contact } from './pages/Contact';
import { Videotes } from './pages/Videotes';
import ReactDOM from "react-dom/client";
import { Link, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import  {Navbar2} from './Navbar2';
import { Study } from './Study';
import { Shop } from './Shop';
import { Blogs } from './Blogs';
function App() {
  return (
  <>
  <h1 className='text-3xl text-center text-blue-200'>hellonavbar</h1>  
  <Navbar></Navbar>
  
  <About></About>  
 

 </>

  );
}

export default App;
