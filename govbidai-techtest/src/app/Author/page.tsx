

async function loadAuthorData (authorName: string) {
    try {
        const response = await fetch('https://openlibrary.org/search/authors.json?q='+authorName);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching and parsing data', error);
    }
}

async function printAuthorData (authorName: string) {
    const data = await loadAuthorData(authorName);
    console.log(data);
}

function AuthorPage () {

    printAuthorData('tolkien');

    return (
        <div>
        Author Page
        </div>
    )
}

export default AuthorPage;