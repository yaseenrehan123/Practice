import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
const App = () => {
  return (
    <div className='p-0 m-0 box-border'>
      <div className='w-screen h-screen bg-neutral-900 text-white text-center'>
        <div className='flex items-center flex-col pt-7 gap-5'>
          <Card className='max-w-80 w-full'>
            <CardHeader>
              <CardTitle>Batman</CardTitle>
              <CardDescription>
                When a sadistic serial killer begins murdering key political figures in Gotham,
                the Batman is forced to investigate the city's hidden corruption and question his family's involvement.
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex flex-col items-center'>
              <Button>
                Watch Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App