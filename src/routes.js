import { homePage, aboutPage, notFoundPage, adminPage, contactPage } from "../src/views.js"

export function route(req, res) {

    // 1. rota principal
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(homePage())
        console.log(`${req.method} ${req.url} 200`)
        return
    }

    // 2. rota /sobre
    if (req.method === "GET" && req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(aboutPage())
        console.log(`${req.method} ${req.url} 200`)
        return
    }

    // 3. rota /antigo
    if (req.method === "GET" && req.url === "/antigo") {
        res.writeHead(301, { "Location": "/sobre" })
        res.end()
        console.log(`${req.method} ${req.url} 301`)
        return
    }

    // 4. rota /busca
    if (req.url.startsWith("/busca")) {
        if (req.url.includes("?termo=")) {
            const termo = req.url.split("?termo=")[1];

            if (termo) {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(`<h1>Resultado da busca</h1><p>Você pesquisou por: ${termo}</p>`);
                console.log(`${req.method} ${req.url} 200`);
                return;
            }
        }

        res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Erro 400</h1><p>O parâmetro 'termo' é obrigatório.</p>");
        console.log(`${req.method} ${req.url} 400`);
        return;
    }

    // 5. rota /admin
    if (req.method === "GET" && req.url === "/admin") {
        res.writeHead(403, { "Content-Type": "text/html; charset=utf-8" })
        res.end(adminPage())
        console.log(`${req.method} ${req.url} 403`)
        return
    }

    // 6. rota /contato
    if (req.url === "/contato") {
        if (req.method === "GET") {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(contactPage());
            console.log(`${req.method} ${req.url} 200`);
            return;
        }

        res.writeHead(405, {
            "Content-Type": "text/html; charset=utf-8",
            "Allow": "GET"
        });
        res.end("<h1>405 Método Não Permitido</h1>");
        console.log(`${req.method} ${req.url} 405`);
        return;
    }

    // 7. qualquer outra rota (404)
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
    res.end(notFoundPage())
    console.log(`${req.method} ${req.url} 404`)
}