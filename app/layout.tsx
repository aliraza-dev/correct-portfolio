import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ali Raza - Fullstack developer",
  description: `Hey, I am a highly skilled Full-stack developer with an impressive track record spanning over eight years. Throughout my career, I have honed my expertise across various frameworks and programming languages, with a strong focus on MERN, Nextjs, and Laravel. Additionally, I have gained valuable experience working with PERL and raw PostgreSQL.

Driven by a passion for continuous growth, I delved into the realm of AWS to acquire practical knowledge of DevOps. This hands-on experience has equipped me with the ability to effectively leverage cloud services and infrastructure for seamless application deployment.

In my pursuit of delivering exceptional results, I have mastered the utilization of JIRA for efficient team management and streamlined feature execution. By proactively monitoring deadlines and maintaining strong client relationships, I ensure the smooth delivery of high-quality products without causing any inconvenience.

With a proven ability to thrive in fast-paced environments, I bring a combination of technical expertise, adaptability, and a results-oriented mindset to every project.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="h-screen w-full container-snap">
          <Navbar />
          <main className="min-h-screen py-8 mt-4 2xl:w-4/5 m-auto">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
