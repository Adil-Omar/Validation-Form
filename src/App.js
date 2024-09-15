import {useState} from 'react'
import Input from './component/Input'
import Select from './component/Select'
import Radio from './component/Radio'
import About from './component/About'
export default function App() {
  const [unerID,setId] = useState('')
  const uid=(e)=>{
    setId(e.target.value)
  }
  const [pass,setPass] = useState('')
  const changePass=(e)=>{
    setPass(e.target.value)
  }
  const [name,setName] = useState('')
  const changeName=(e)=>{
    setName(e.target.value)
  }
  const [country,setCountry] = useState('(Select Your Country)')
  const changeCountry=(e)=>{
    setCountry(e.target.value)
  }
  const [zip,setZip] = useState('')
  const changeZip=(e)=>{
    setZip(e.target.value)
  }
  const [email,setEmail] = useState('')
  const changeEmail=(e)=>{
    setEmail(e.target.value)
    email.split('')
  }
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Registration Form</h1>
      <form action=""  >
        <Input title="User ID :" req="true" func={uid} border={unerID.length >= 5 && unerID.length <= 12 ? "green" : "red"}  type="text" place="Enter your ID" />
        <Input title="Password :" req="true" func={changePass} border={pass.length>=7 && pass.length<=12?"green":"red"}  type="password" place="Enter your password" />
        <Input title="Name :" req="true" func={changeName} border={name.length>0?"green":"red"}  type="text" place="Enter your name" />
        <Input title="Adress :"   type="text" border="black" place="Optional" />
        <Select func={changeCountry} country={country} border={country==="(Select Your Country)"?"red":"green"} />
        <Input title="Zip Code :" req="true" func={changeZip} border={zip.length>0?"green":"red"}  type="number" place="Enter your Zip Code" />
        <Input title="Email :" req="true" func={changeEmail} border={email.includes('.') && email.includes('@') && email.includes('.com')?"green":"red"}  type="email" place="Enter your email" />
        <Radio title="Gender:" val1="Male" val2="Female" id1="gender" input='gender' style={{width:"52.5%",textAlign:"right",margin:"10px 0"}} />
        <Radio title="Language:" val1="English" val2="Non-English" id2="language" style={{width:"56%",textAlign:"right",margin:"10px 0"}} input='language' />
        <About />
        <div style={{display:"flex",justifyContent:'center',alignContent:'center'}} >

        <button style={{padding:'10px',fontSize:'larger' }} > Submit</button>
        </div>

      </form>
    </div>
  )
}
