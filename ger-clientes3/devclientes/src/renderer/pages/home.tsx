import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom"

export function Home(){
    const queryClient = useQueryClient();

    //Buscando os clientes
    const { data, isFetching } = useQuery({
        queryKey: ["customers"],
        queryFn: async () => {
            const response = await window.api.fetchAllCustomers();
            return response;
        }
    });
    async function handleAdd(){
        const response = await window.api.fetchAllCustomers();
        console.log(response)
    }

    async function handleCustomerByID() {
        const response = await window.api.fetchCustomerByID("4aa6cafc-f241-4c62-aaf7-498343eb9adf")
        console.log(response)
    }

    async function handleDeleteCustomerByID() {
        const response = await window.api.deleteCustomer("4aa6cafc-f241-4c62-aaf7-498343eb9adf")
        console.log(response)
    }
    return (
        <div className="flex-1 flex flex-col py-12 text-white">
            <div className="px-10">
                <h1 className="text-white text-xl lg:text-3xl font-semibold mb-4">Todos os clientes</h1>
            </div>
            <section className="flex flex-col gap-6 w-full h-screen overflow-y-auto px-10 pb-[200px]">
                {!isFetching && data?.length === 0 && (
                    <p className="text-gray-300">Nenhum cliente cadastrado...</p>
                )}
                {data?.map((customer) => (
                    <Link
                        to={`/customer/${customer._id}`}
                        key={customer._id}
                        className="bg-gray-800 px-4 py-3 rounded">
                        <p className="mb-2 font-semibold text-lg">{customer.name}</p>
                        <p><span className="font-semibold">Email: </span>{customer.email}</p>
                        {customer.phone && (
                            <p><span className="font-semibold">Telefone: </span>{customer.phone}</p>
                        )}

                    </Link>
                ))}
            </section>
        </div>
    )
}