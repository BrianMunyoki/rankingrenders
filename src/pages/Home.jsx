import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="projects"><ProjectGrid /></section>
      <section id="skills"><Expertise /></section>
      <section id="about"><Experience /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default Home;