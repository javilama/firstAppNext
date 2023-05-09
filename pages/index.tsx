

import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import styles from '../styles/Home.module.css'


export default function HomePage() {
  return (
    <MainLayout>

       <div className={styles.center}>
          <h1>Home</h1>
        </div>
        <p>
          Get started by editing&nbsp;
          <code>pages/home.js</code>
        </p>
    </MainLayout>
    
  );
}
