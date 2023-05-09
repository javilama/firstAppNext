import MainLayout from "../../components/layouts/MainLayout";
import styles from '../../styles/Home.module.css'

export default function ContactPage() {
  return (
    <MainLayout>
      <div className={styles.center}>
        <h1>Contact</h1>
      </div>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
