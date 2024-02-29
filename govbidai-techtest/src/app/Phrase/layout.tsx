export const metadata = {
    title: "Phrase",
    description: "Phrase page",
};

export default function PhraseLayout({children}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}