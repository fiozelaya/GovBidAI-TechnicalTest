export const metadata = {
    title: "Title",
    description: "Title page",
};

export default function TitleLayout({children}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}