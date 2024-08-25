import styles from './SkillStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML"/>
        <SkillList src={checkMark} skill="CSS"/>
        <SkillList src={checkMark} skill="JavaScript"/>
        <SkillList src={checkMark} skill="Node"/>
        <SkillList src={checkMark} skill="TypeScript"/>
        <SkillList src={checkMark} skill="C#"/>
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Django"/>
        <SkillList src={checkMark} skill="React"/>
        <SkillList src={checkMark} skill="Vue"/>
        <SkillList src={checkMark} skill="Tailwind CSS"/>
        <SkillList src={checkMark} skill="Vanilla CSS"/>
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Redux"/>
        <SkillList src={checkMark} skill="Git"/>
        <SkillList src={checkMark} skill="WebPack"/>
        <SkillList src={checkMark} skill="Boostrap"/>
      </div>
    </section>
  )
}

export default Skills;