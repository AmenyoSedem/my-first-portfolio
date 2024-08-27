import styles from './SkillStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <motion.h1 
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className='sectionTitle'
      >
        Skills
      </motion.h1>

      <motion.div 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className={styles.skillList}
      >
        <SkillList src={checkMark} skill="HTML"/>
        <SkillList src={checkMark} skill="CSS"/>
        <SkillList src={checkMark} skill="JavaScript"/>
        <SkillList src={checkMark} skill="Node"/>
        <SkillList src={checkMark} skill="TypeScript"/>
        <SkillList src={checkMark} skill="C#"/>
      </motion.div>
      <hr />

      <motion.div 
        initial={{x: 100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className={styles.skillList}
      >
        <SkillList src={checkMark} skill="Django"/>
        <SkillList src={checkMark} skill="React"/>
        <SkillList src={checkMark} skill="Vue"/>
        <SkillList src={checkMark} skill="Tailwind CSS"/>
        <SkillList src={checkMark} skill="Vanilla CSS"/>
      </motion.div>
      <hr />

      <motion.div 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className={styles.skillList}
      >
        <SkillList src={checkMark} skill="Redux"/>
        <SkillList src={checkMark} skill="Git"/>
        <SkillList src={checkMark} skill="WebPack"/>
        <SkillList src={checkMark} skill="Boostrap"/>
      </motion.div>
    </section>
  )
}

export default Skills;