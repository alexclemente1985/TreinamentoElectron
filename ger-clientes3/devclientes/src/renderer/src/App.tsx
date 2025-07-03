import { QueryClientProvider } from '@tanstack/react-query'
import {Routes} from './Routes'
import { queryClient } from "./lib/react-query"

export default function App(){
  return(
    //Para permitir o cacheamento com o react-query
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}