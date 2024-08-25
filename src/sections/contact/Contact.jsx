import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mvgpdoaz" method='post'>
        <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name='name' id='name'  placeholder='Name' required important/>
        </div>

        <div className="formGroup">
            <label htmlFor="name" hidden>Email</label>
            <input type="Email" name='email' id='email'  placeholder='Email' required important/>
        </div>

        <div className="formGroup">
            <label htmlFor="name" hidden>Message</label>
            <textarea name='message' id='message'  placeholder='Message' required important></textarea>
        </div>
        <input type="submit" className='hoverBtn' value="Submit"/>
      </form>
    </section>
  )
}

export default Contact;