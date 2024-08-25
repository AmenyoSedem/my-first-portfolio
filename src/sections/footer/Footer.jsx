import styles from './FooterStyles.module.css';

function Footer() {

    let date = new Date().getFullYear()
  return (
    <section id='footer' className={styles.container}>
      <hr />
      <p>&copy; {date} Amenyo Sedem. <br />
      All rights reserved.</p>
    </section>
  )
}

export default Footer;