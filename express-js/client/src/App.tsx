import React from 'react'
import Form from './components/Form'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const client = new QueryClient();
  return (
    <div className='m-0 p-0 box-border'>
      <div className='w-screen h-screen bg-neutral-900 text-center'>
        <div className='flex items-center flex-col gap-2 pt-10'>
          <QueryClientProvider client={client}>
            <Form/>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  )
}

export default App