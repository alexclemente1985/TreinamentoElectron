import { useQuery } from "@tanstack/react-query";

export function About(){
    //Buscando os clientes
    const { data, isFetching } = useQuery({
        queryKey: ["app-version"],
        queryFn: async () => {
            const response = await window.api.getVersionApp();
            return response;
        }
    });
    return(
        <div className="flex-1 flex flex-col py-12 text-white">
            <h1 className="text-white text-xl lg:text-3xl font-semibold mb-4">Página Sobre</h1>
            <p>Projeto criado no curso <b>@udemy</b></p>
            <p>Versão do projeto: <b>{!isFetching && data && data}</b></p>
        </div>
    )
}