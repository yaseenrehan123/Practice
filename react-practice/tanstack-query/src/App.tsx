import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import MediaContainer from './components/MediaContainer';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className='m-0 p-0 box-border'>
      <div className='w-screen h-screen bg-neutral-900'>
        <div className='flex items-center flex-col pt-9 text-center'>
          <QueryClientProvider client={queryClient}>
            <MediaContainer/>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  )
}

export default App