function layout(title, content) {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
            </nav>
            ${content}
        </body>
        </html>
    `
}

export function homePage() {
    return layout('Home', '<h1>Seja Bem-vinda(o)</h1>');
}

export function notFoundPage() {
    return layout('Not Found', '<h1>404 - Página não encontrada</h1>');
}

