import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png'
import burger from '../../assets/fresh-burger.png'
import glasses from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import latest from '../../assets/Design uten navn.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectWrap}>
        <div className={styles.projectsContainer}>
          <ProjectCard src={Viberr} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </div>

        <div className={styles.projectsContainer}>
          <ProjectCard src={burger} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </div>

        <div className={styles.projectsContainer}>
          <ProjectCard src={glasses} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </div>

        <div className={styles.projectsContainer}>
          <ProjectCard src={fitlift} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </div>

        <div className={styles.projectsContainer}>
          <ProjectCard src={latest} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </div>
      </div>
    </section>
  )
}

export default Projects;