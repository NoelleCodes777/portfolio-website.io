import ProjectExp from '../../Project_exp';
import Frontpage from '../../Frontpage';
import Footer from '../../Footer';
import About from '../../About';
import Contact from '../../Contact';
import EducationCert from "../../EducationCert";
import Skills from "../../Skills";


export default function Home() {


    return (
        <>
            
            <Frontpage />
            <Skills />
            <EducationCert />
            <About />
            <ProjectExp />
            <Contact />
        </>
    )
}