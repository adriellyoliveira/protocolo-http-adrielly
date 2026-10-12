import { homePage, aboutPage, notFoundPage, adminPage, } from "../src/views.js"

export function route(req, res) {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(homePage())
        return
    }

    if (req.method === "GET" && req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(aboutPage())
        return
    }

    if (req.method === "GET" && req.url === "/antigo") {
        res.writeHead(301, { "Location": "/sobre" })
        res.end()
        return
    }

    if (req.url.startsWith("/busca")) {
        if (req.method === "GET") {
            if (req.url.includes("?termo=")) {
                const termo = req.url.split("?termo=")[1];

                if (termo) {
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(`<h1>Resultado da busca</h1><p>Você pesquisou por: ${termo}</p>`);
                    return;
                }
            }

            res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
            res.end("<h1>Erro 400</h1><p>O parâmetro 'termo' é obrigatório.</p>");
            console.log(`${req.method} ${req.url} 400`);
            return;
        }
    }



    res.writeHead(404, { "Content-Type": "text/html" })
    res.end(notFoundPage())

}