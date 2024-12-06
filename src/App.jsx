
import styles from './App.module.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { Project } from './components/projects/Project';

function App() {

  return (
    <div className={styles.App}>
      
      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Project />
      <Contact />
    </div>
  )
}

export default App
