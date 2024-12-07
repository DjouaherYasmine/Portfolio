import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import profil1 from "C:/my-portfolio/src/assets/profil1.jpg"
import "C:/my-portfolio/src/App.css"
import {
  Github,
  Mail,
  Phone,
  Linkedin,
  Code,
  BookOpen,
  User,
  Briefcase,
  Award,
  MessageSquare
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 64, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  const NavButton = ({ section }) => (
    <Button
      variant={activeSection === section ? "default" : "ghost"}
      className="capitalize"
      onClick={() => scrollToSection(section)}
    >
      {section}
    </Button>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold mb-6 text-center">{children}</h2>
  );

  const SkillBadge = ({ skill }) => (
    <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">{skill}</span>
  );

  return (
    <div className="min-h-screen bg-gray-50">
    <nav class="fixed sm:flex bg-gradient-to-r from-[#04071D] to-[#0C0E23] mx-auto flex w-full sm:w-auto">
    <div class="flex flex-row h-16 items-center justify-center sm:gap-1 md:gap-2 lg:gap-4">
        {['about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map(section => (
            <NavButton key={section} section={section} class="text-sm sm:text-base md:text-lg font-medium" />
        ))}
    </div>
</nav>
      {/* Main Content with padding-top to account for fixed navbar */}
      <main >
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#000319] bg-[url('C:/my-portfolio/src/assets/grid_pattern.svg')] bg-cover bg-no-repeat ">
  <div className="text-center space-y-4 z-10">
    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full overflow-hidden">
      <img
        src={profil1}
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
      />
    </div>
    <h1 className="text-4xl font-bold text-white">Djouaher Yasmine</h1>
    <p className="text-xl text-gray-300">
      Third-Year Computer Science Student at Ecole Supérieure d'Informatique (ESI)
    </p>
    <Button onClick={() => scrollToSection('contact')} className="mt-4 rounded-xl shadow-lg shadow-electric-blue">
      <Mail className="mr-2 h-4 w-4" /> Contact Me
    </Button>
  </div>
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[url('C:/my-portfolio/src/assets/right.svg')] bg-cover bg-no-repeat" />
  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[url('C:/my-portfolio/src/assets/left.svg')] bg-cover bg-no-repeat" />
</section>


        {/* About Section */}
        <section id="about" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <p>Computer Science at Ecole Supérieure d'Informatique (2022-2027)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="space-y-2">
                    {['Arabic', 'French', 'Tamazight', 'English', 'Spanish'].map(lang => (
                      <SkillBadge key={lang} skill={lang} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">RELEV Department Assistant at CSE Club</h3>
                  <p className="text-gray-600 mt-2">
                    Managed communication, event organization, and team coordination for various club activities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">Lead Organizer - CSE Around Algeria</h3>
                  <p className="text-gray-600 mt-2">
                    Scaled the event internationally and managed project coordination across multiple teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>Projects</SectionTitle>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Beaver Home Services Mobile Application</h3>
                <p className="text-gray-600 mt-2">
                  Developed geolocation functionality and implemented both backend and frontend components.
                  Created intuitive interface designs for enhanced user experience.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Geolocation API'].map(tech => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>Skills</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'JavaScript', 'C', 'HTML', 'CSS', 'Dart', 'Flutter', 'React', 'Redux', 'SQL', 'Linux', 'Figma'].map(skill => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Communication', 'Teamwork', 'Project Coordination', 'Leadership'].map(skill => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>Certifications</SectionTitle>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">IBM Developing Front End Apps with React</h3>
                <Button variant="link" className="mt-2">
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 bg-[#000319]">
          <div className="container mx-auto px-4">
            <SectionTitle>Contact Me</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" className="min-h-[100px]" />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>email@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>+1234567890</span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;