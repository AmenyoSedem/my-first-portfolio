import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/viberr.png'
import burger from '../../assets/fresh-burger.png'
import glasses from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import latest from '../../assets/Design uten navn.png'
import ProjectCard from '../../common/ProjectCard';
import { animate, motion } from 'framer-motion';

const projectsVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    // opacity: 1,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <motion.h1 
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className="sectionTitle"
      >
        Projects
      </motion.h1>
      <div className={styles.projectWrap}>
        <motion.div 
          variants={projectsVariants(1.5)}
          initial="initial"
          animate="animate"
          className={styles.projectsContainer}
        >
          <ProjectCard src={Viberr} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </motion.div>

        <motion.div 
          variants={projectsVariants(2)}
          initial="initial"
          animate="animate"
          className={styles.projectsContainer}
        >
          <ProjectCard src={burger} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </motion.div>

        <motion.div 
          variants={projectsVariants(2.5)}
          initial="initial"
          animate="animate"
          className={styles.projectsContainer}
        >
          <ProjectCard src={glasses} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </motion.div>

        <motion.div 
          variants={projectsVariants(3)}
          initial="initial"
          animate="animate"
          className={styles.projectsContainer}
        >
          <ProjectCard src={fitlift} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </motion.div>

        <motion.div 
          variants={projectsVariants(3.5)}
          initial="initial"
          animate="animate"
          className={styles.projectsContainer}
        >
          <ProjectCard src={latest} link={"https://github.com/AmenyoSedem/ProjectsFolder/tree/main/PROJECTS/Image%20Slider"} header="Slider" paragraph="Image Slider Site"/>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;