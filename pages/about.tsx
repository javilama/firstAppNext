
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import styles from '../styles/Home.module.css'
import DarkLayout from "../components/layouts/DarkLayout";


export default function AboutPage() {
  return (
    <>
       
      
        <div className={styles.center}>
          <h1>About</h1>
        </div>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.jsx</code>
        </p>

        
      </>
  );
}


AboutPage.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
        <DarkLayout>
           {page}
        
        </DarkLayout>
      </MainLayout>

  )
}