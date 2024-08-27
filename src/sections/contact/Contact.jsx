import styles from './ContactStyles.module.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <motion.h1 
        initial={{y: -100, opacity: 0}}
        whileInView={{y: -0, opacity: 1}}
        transition={{duration: 1.8, delay: 0}}
        className="sectionTitle"
      >
        Contact
      </motion.h1>
      <form action="https://formspree.io/f/mvgpdoaz" method='post'>
        <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name='name' id='name'  placeholder='Name' required/>
        </div>

        <div className="formGroup">
            <label htmlFor="name" hidden>Email</label>
            <input type="Email" name='email' id='email'  placeholder='Email' required/>
        </div>

        <div className="formGroup">
            <label htmlFor="name" hidden>Message</label>
            <textarea name='message' id='message'  placeholder='Message' required></textarea>
        </div>
        <input type="submit" className='hoverBtn' value="Submit"/>
      </form>
    </section>
  )
}

export default Contact;