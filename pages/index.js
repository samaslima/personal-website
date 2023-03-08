import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samara Lima</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Samara Lima
        </h1>

        <p className={styles.description}>
          Desenvolvedora de Software com experiência em Java e Angular. 
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

    </div>
  )
}
