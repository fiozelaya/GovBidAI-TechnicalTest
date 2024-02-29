export const metadata = {
    title: "Author",
    description: "Author page",
};

export default function AuthorLayout({children}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}