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
        
        <h2 className={styles.subtitle}>
          Solicitudes de garantia
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

    // <div>
    //   <div className="imagen">
    //     <div className="img1">
    //       {/* <Image src="/App1.png" alt="ProntoPago" width="484" height="212" /> */}
    //       <Image src="/Nd.png" alt="Feliz Navidad" width="484" height="212" />
    //     </div>
    //   </div>
    //   {/* <div className="imagen"></div>
    // <div className="img1">
    // <a
    //     href="https://docs.google.com/forms/d/e/1FAIpQLSeOd4Cz_Z0AuDJ6cyfFLjzNvRNZtC2lAgEwn-onmf9cN8FerA/viewform?usp=sf_link"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //   <Image src="/AD1.png" alt="Actualizacion de datos" width="420" height="175" />
    //   </a>
    // </div>
    // </div>  */}
    //   <p className={styles.description}>Medios de Pagos</p>
    //   <div className={styles.grid}>
    //     <NextLink href="/corresponsal" passHref>
    //       <a className={styles.card}>
    //         <p>Corresponsal Bancolombia </p>
    //       </a>
    //     </NextLink>
    //     <NextLink href="/bancario" passHref>
    //       <a className={styles.card}>
    //         <p>Pagos Bancario </p>
    //       </a>
    //     </NextLink>
    //   </div>
    //   <p className={styles.description}>Documentos</p>
    //   <div className={styles.grid}>
    //     <NextLink href="/documentos" passHref>
    //       <a className={styles.card}>
    //         <p>Documentos</p>
    //       </a>
    //     </NextLink>
    //   </div>
    //   <p className={styles.description}>Metodos de Contacto</p>
    //   <div className={styles.grid}>
    //     <a
    //       href="https://wa.me/573104948976?text=Hola%20te%20hablo%20desde%20la%20%20APP!"
    //       className={styles.card}
    //     >
    //       <p>WhatsApp </p>
    //     </a>
    //     <a href="mailto:floresdemaria4595@gmail.com" className={styles.card}>
    //       <p>Correo Electronico</p>
    //     </a>
    //   </div>
    // </div>
  );
}
