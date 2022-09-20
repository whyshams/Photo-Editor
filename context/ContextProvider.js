import {useContext,createContext,useState} from 'react'


const ResultContext = createContext()

export default function ContextProvider  ({children})  {
    const [mobile,setMobile] = useState(false);
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
  return (
    <ResultContext.Provider value={{mobile,setMobile,text, setText,image, setImage}}>
    {children}
  </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
