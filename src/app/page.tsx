import Image from "next/image";
import NextLink from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className={styles.title}>Bienvenidos a la APP del Conjunto</h1>
        <h2 className={styles.subtitle}>
          Metodos de pago de la Administración
        </h2>

        <div className={styles.imagine}>
          <NextLink
            href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00024970&origen=buscar"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/PSE.png" alt="Pago por PSE" width={160} height={160} />
          </NextLink>
        </div>
        

        
        <h2 className={styles.subtitle}>
          Metodos de contacto con la Administración
        </h2>
        <div className={styles.imagine}>
          <NextLink
            href="https://wa.me/573215036003?text=Hola%20!"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/WA.png" alt="WhatsApp" width={160} height={160} />
          </NextLink>
        </div>
        <div className={styles.imagine}>
          <NextLink
            href="mailto:senderosdelasierrav@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/CE.png" alt="senderosdelasierrav@gmail.com" width={160} height={160} />
          </NextLink>
        </div>
        <br />
          <h2 className={styles.subtitle}>
            Solicitud de Garantia Constructora
          </h2>
        <div className={styles.imagine}>
          <NextLink
            href="https://orbeconstrucciones.com.co/postventa/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/PV.png" alt="Garantia" width={160} height={160} />
          </NextLink>
        </div>
      </main>
    </div>
  );
}
