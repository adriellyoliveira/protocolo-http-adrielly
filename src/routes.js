import { homePage, aboutPage, notFoundPage, adminPage } from "../src/views.js"

export function route(req, res) {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"})
        res.end(homePage())
        return
    }

    res.writeHead(404, { "Content-Type": "text/html"})
    res.end(notFoundPage())

}