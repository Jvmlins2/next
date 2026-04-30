import { api } from "./api";

export async function login(email: string, senha:string){
    try{
        //requisição:
       const response = await api.post("Autenticacao/login", {email, senha});
       const token = response.data.token;

       localStorage.setItem("token", token);

    }catch(error: any){
        throw new Error("Email ou senha inválidos");
    }
}