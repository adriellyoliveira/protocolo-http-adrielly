import { homePage, aboutPage, notFoundPage, adminPage, } from "../src/views.js"

export function route(req, res) {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(homePage())
        return
    }

    if (req.method === "GET" && req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(aboutPage())
        return
    }

    if (req.method === "GET" && req.url === "/antigo") {
        res.writeHead(301, { "Location": "/sobre" })
        res.end()
        return
    }

    res.writeHead(404, { "Content-Type": "text/html" })
    res.end(notFoundPage())

}