
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './componennt/CoffeeCard'
import { useState } from 'react';

function App() {
  const loadCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadCoffees)

  return (
    <div className='m-20 '>
      <h2 className='my-20 text-center text-3xl'>All data here now:{coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee =><CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
