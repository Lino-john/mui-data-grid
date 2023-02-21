import patientApi from './api/patient-api'
import { useEffect, useState } from 'react'

import { SimpleContainer } from './components/SimpleContainer'


export const App = () => {
  const [patients, setPatients] = useState([])
  const [error, setError] = useState({})


  const loadData = async () => {
    await patientApi.get()
      .then(function (response) {
        console.log("🚀 ~ file: App.js:15 ~ response", response)
        setPatients(response.data.items)
      })
      .catch(function (error) {
        if (error.message) {
          setError(error)
        }
      });
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <SimpleContainer data={patients} error={error} />
    </div >
  )
}

