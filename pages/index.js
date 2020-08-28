import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nos métiers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nos métiers
        </h1>

        <p className={styles.description}>
          Nous agrégeons les meilleures technologies IT pour qu’elles puissent vous être bénéfiques au quotidien.
        </p>
        <div className={styles.backgroundImage}>
          <img src='/Assets/Formes/illustration/bleu-mini.png' className={styles.backgroundImage01} />
          <img src='/Assets/Formes/angle-arrondi/saumon/4.png' className={styles.backgroundImage02} />
          <img src='/Assets/Formes/illustration/vert-mini.png' className={styles.backgroundImage03} />
          <Container fluid className={styles.cardArea}>
            <Row className={styles.cardArea}>
              <Col xs={3}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src='/Assets/images/cloud.png' alt="cloud" />
                    <p className={styles.subTitle}>Cloud</p>
                    <p className={styles.text}>Optimiser l’utilisation de votre IT au quotidien avec des technologies agiles, sécurisées et innovantes.</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src='/Assets/images/modern-workplace.png' alt="cloud" />
                    <p className={styles.subTitle}>Modern Workplace</p>
                    <p className={styles.text}>Mettre en place et interconnecter des solutions collaboratives pour vos équipes.</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src='/Assets/images/sécurité.png' alt="cloud" />
                    <p className={styles.subTitle}>Sécurité</p>
                    <p className={styles.text}>Vous permettre d’être serein en protégeant votre cœur informatique ainsi que vos données  tout en garantissant la protection des données utilisateurs (RGPD friendly).</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <img src='/Assets/images/service-managé.png' alt="cloud" />
                    <p className={styles.subTitle}>Services Managés</p>
                    <p className={styles.text}>Superviser votre système IT. Équiper des meilleurs outils pour superviser de façon complète votre SI</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  )
}
