import styles from './HeroStyles.module.css';
import heroImg from '../../assets/me.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-Dark.svg';
import CV from '../../assets/MyResume.pdf'
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <motion.div 
          initial={{x: 100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 1.8, delay: 0}}
          className={styles.colorModeContainer}
        >
            <img className={styles.hero} src={heroImg} alt="Profile picture of Sedem Amenyo" />
            <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="Color mod icon" />
        </motion.div>
        <motion.div 
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 2.8, delay: 0}}
          className={styles.info}
        >
          <h1>Amenyo <br /> Sedem</h1>
          <h2>Full-Stack Developer</h2>
          <span>
            <a href="https://twitter.com/" target='blank'>
              <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/" target='blank'>
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://linkedin.com/" target='blank'>
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
          </span>
          <p className={styles.description}>With a pasion for developing modern React web apps for commercial businesses.</p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
        </motion.div>
    </section>
  )
}

export default Hero;
