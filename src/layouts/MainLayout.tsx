import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

import '@/styles/theme.scss'

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body> 
                <Header />
                { children }
                <Footer />
            </body>
        </html>
    );
}
  