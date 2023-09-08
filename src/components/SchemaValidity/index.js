import { z } from "zod";

export const ShemaValidity = z.object({
    name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "É necessário pelo menos dois caracteres"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    departament: z.string().nonempty("Escolher um setor é obrigatório"),
    message: z
    .string()
    .nonempty("A mensagem é obrigatória")
    .min(8, "É necessário pelo menos oito caracteres"),
})