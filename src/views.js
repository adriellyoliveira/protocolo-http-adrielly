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
                <a href="/">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
            </nav>
            ${content}
        </body>
        </html>
    `
}

export function homePage() {
    return layout('Início', '<h1>Página Inicial</h1>');
}

export function aboutPage() {
    return layout('Sobre', '<h1>Sobre Nós</h1>');
}

export function contactPage() {
    return layout('Contato', '<h1>Página de Contato</h1>');
}

export function adminPage() {
    return layout('Admin', '<h1>403 - Acesso não autorizado</h1>');
}

export function notFoundPage() {
    return layout('Not Found', '<h1>404 - Página não encontrada</h1>');
}

