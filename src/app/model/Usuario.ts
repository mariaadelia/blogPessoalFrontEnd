import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public email: string
    public dataAniversario: Date
    public foto: string
    public tipo: string
    public senha: string
    public postagem: Postagem[]
}