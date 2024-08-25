export default function EmptyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body> 
                { children }
            </body>
        </html>
    );
}
  