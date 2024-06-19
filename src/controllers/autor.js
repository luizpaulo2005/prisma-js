import { prisma } from "../lib/prisma.js";

const listarAutores = async (req, res) => {
  const select = await prisma.autor.findMany();

  return res.status(200).json(select);
};

const listarAutor = async (req, res) => {
  const { id } = req.params;

  try {
    const select = await prisma.autor.findUnique({
      where: { id },
    });
    return res.status(200).json(select);
  } catch (error) {
    return res.status(500).send("Erro ao buscar autor");
  }
};

const criarAutor = async (req, res) => {
  const { nome, sobrenome, dataNascimento } = req.body;

  await prisma.autor
    .create({
      data: {
        nome,
        sobrenome,
        dataNascimento: new Date(dataNascimento),
      },
    })
    .then((resp) => {
      return res.status(200).json(resp);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

const atualizarAutor = async (req, res) => {};

const apagarAutor = async (req, res) => {
  const { id } = req.params;

  await prisma.autor
    .delete({
      where: { id },
    })
    .then((res) => {
      return res.status(200).send("Autor criado");
    })
    .catch((err) => {
      return res.status(500).status("Erro ao excluir autor");
    });
};

export { apagarAutor, atualizarAutor, criarAutor, listarAutor, listarAutores };
