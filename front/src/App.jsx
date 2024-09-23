import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { getPrueba } from './api';

function App() {
  const [guardar, setGuardar] = useState('')

  getPrueba()

  return (
    <>
      <TextField variant='outlined' label='texto de prueba' name='' onChange={(e) => setGuardar(e.target.value)}></TextField>
      <Button variant='contained' onClick={(e) =>console.log(guardar) }>Guardar</Button>
    </>
  )
}
export default App
