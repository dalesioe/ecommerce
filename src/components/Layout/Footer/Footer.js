import styles from "./Footer.module.scss";
import { Container, Image, Button } from "semantic-ui-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="images/logo.png" alt="Gaming" />
            </Link>
          </div>
          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Politica de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>
          <div className={styles.social}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © Gaming - Todos los derechos reservados</span>
        </div>
      </Container>
    </div>
  );
}
