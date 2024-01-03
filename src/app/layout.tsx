import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senderos de la Sierra",
  description: "Pagina Principal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.nav}>
          <NextLink href="/" passHref>
            <Image src="/FL1.png" alt="Logo" width={360} height={180} />
          </NextLink>
        </nav>

        <main className={styles.main}>
         {children}
        </main>
        <footer className={styles.footer}>
          <span className={styles.subtitle}>
            ASESORIAS Y SERVICIOS GYG SAS® 2024
          </span>
        </footer>
      </div>
    </html>
  );
}
