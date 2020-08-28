import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
              <Col>
                <div className={styles.card}>
                </div>
              </Col>
              <Col>
                <div className={styles.card}>
                </div>
              </Col>
              <Col>
                <div className={styles.card}>
                </div>
              </Col>
              <Col>
                <div className={styles.card}>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  )
}
