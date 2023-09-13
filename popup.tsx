import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <button onClick={()=>{
        window.postMessage('test', 'http://example.org:8080')
        setData('postmessage')
        
      }}>pick password</button>
      <div>{data}</div>
      
    </div>
  )
}

export default IndexPopup
