import axios from 'axios'

export const getPrueba = async () => {
    try {
       const response = await axios.get('http://127.0.0.1:8000/api/prueba/')
       console.log({response})
    } catch (error) {
        
    }
}