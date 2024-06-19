import { Router } from 'express';
import {
    apagarAutor,
    atualizarAutor,
    criarAutor,
    listarAutor,
    listarAutores,
} from "../controllers/autor.js";

const autorRoute = Router();

autorRoute.get("/", listarAutores);
autorRoute.get("/:id", listarAutor);
autorRoute.post("/", criarAutor);
autorRoute.put("/:id", atualizarAutor);
autorRoute.delete("/:id", apagarAutor);

export { autorRoute }