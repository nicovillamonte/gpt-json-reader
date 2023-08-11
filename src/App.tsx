import { useEffect, useState } from 'react'
import './App.css'
import Title from './components/Title'
import Chat from './components/Chat'

function App() {
  const [json, setJSON] = useState("")
  const [jsonParsed, setJSONParsed] = useState([{role: "", content: ""}])

  const [context, setContext] = useState("")

  useEffect(() => {
    try{
      // Convert string to json
      const jsonParsed = JSON.parse(json)

      // if json is not compatible with {role: string, content: string}[] then throw error
      if(!Array.isArray(jsonParsed) || !jsonParsed.every((element: {role: string, content: string}) => element.role && element.content)) throw new Error("Invalid JSON")

      setJSONParsed(jsonParsed)
      // Get context from json
      const contextParsed = jsonParsed.find((element: {role: string, content: string}) => element.role == 'system').content
      // Set context to textarea
      setContext(contextParsed)
    } catch(_) {
      console.error("Invalid JSON")
    }
  }, [json])

  return (
    <div className='flex flex-col gap-10 h-full'>
      <div className="flex flex-col" id='JSON-container'>
        <Title>JSON del chat</Title>
        <textarea id="text-json" className='h-52 w-full border-gray-700 border-2 p-2 rounded-lg' value={json} onChange={(event) => setJSON(event.target.value)}/>
      </div>

      <div className="flex flex-col" id='context-container'>
        <Title>Contexto proporcionado</Title>
        <textarea id="text-context" className='h-52 w-full border-gray-700 border-2 p-2 rounded-lg' value={context}/>
      </div>

      <div className="flex flex-col">
        <Title>Chat</Title>
        <Chat messages={jsonParsed}/>
      </div>
    </div>
  )
}

export default App
