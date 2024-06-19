-- CreateTable
CREATE TABLE "Autor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Editora" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "idAutor" TEXT NOT NULL,
    "idEditora" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Livro_idAutor_fkey" FOREIGN KEY ("idAutor") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Livro_idEditora_fkey" FOREIGN KEY ("idEditora") REFERENCES "Editora" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
