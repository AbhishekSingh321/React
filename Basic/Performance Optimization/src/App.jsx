import CardSkeleton from './components/CardSkeleton'

function App() {
  return (
    <>
      <div style={{display:'flex', gap: '20px', padding: '20px'}}>
        <CardSkeleton/>
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  )
}

export default App
