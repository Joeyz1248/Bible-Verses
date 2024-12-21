import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunFacts from './components/FunFacts'

function App() {
  
  const FunFactsList = [
    {fact: "Ketchup Medicine", desc:"Ketchup was originally sold as a medicine"},
    {fact: "Lightning Hot", desc:"A bolt of lightning is five times hotter than the sun"},
    {fact: "Genderless Worms", desc:"There are no male or female earthworms. All earthworms have both male and female parts"},
  ]
  return (
    <div>
      <div className='bg-sky-400 h-14 flex justify-between items-center'>
        <h3 className='text-5xl ml-5 style font-bold'>Fun Facts</h3>
        <a className='text-white text-3xl mr-5 underline decoration-solid ease-in-out duration-500 hover:text-sky-800' href="">About</a>
      </div>
      <div className='justify-items-center text-center'>
        <h1 className="text-sky-400 text-center mt-12">FUN FACTS</h1>
        <h2>By: Joey Zhang</h2>
        <br /><br />
        <img src="https://t4.ftcdn.net/jpg/05/46/35/99/360_F_546359977_9wmajjf6i9aMeh20AJQGyLsm2kH7tTu2.jpg" alt="" className='rounded-3xl' />
        <br /><br />
        <div className='flex flex-col gap-8 p-5 border-sky-800 rounded-lg border-4'>
          {FunFactsList.map( (funfact) => {
            return <FunFacts fact={funfact.fact} desc={funfact.desc}/>
          })}
        </div> 
      </div>
    </div>
  )
}

export default App
