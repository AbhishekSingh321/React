import CardSkeleton from './components/CardSkeleton'
import React, { Suspense } from 'react';

const HeavyPg = React.lazy(() => import("./pages/HeavyPg"));

function App() {
  return (
    <>
      {/* <div style={{display:'flex', gap: '20px', padding: '20px'}}>
        <CardSkeleton/>
        <CardSkeleton />
        <CardSkeleton />
      </div> */}
      <Suspense fallback={<p>Loading....</p>}>
        <HeavyPg/>
      </Suspense>
    </>
  )
}

export default App
