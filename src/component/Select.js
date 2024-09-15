import React from 'react'
    
export default function Select(props) {
  return (
    <div style={{width:"55%",textAlign:"right",margin:"10px 0"}}>
      <label htmlFor="">Country: <select value={props.country} onChange={props.func} style={{width:"167px",outline:'none',padding:'1px',border:`2px solid ${props.border}`}} name="country" id="">
        <option value="(Select Your Country)" >(Select Your Country)</option>
        <option value="Pakistan">Pakistan</option>
        <option value="India">India</option>
        <option value="America">America</option>
        <option value="England">England</option>
        <option value="China">China</option>
        </select> </label>
    </div>
  )
}
