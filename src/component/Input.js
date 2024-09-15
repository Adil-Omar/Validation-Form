
export default function Input(props) {
  return (
    <div style={{width:"55%",textAlign:"right",margin:"10px 0"}} >
      <label  htmlFor="">{props.title} <input  type={props.type} required={props.req} onChange={props.func} style={{padding:'1px',outline:"none",marginLeft:"5px",border:`2px solid ${props.border}`}} placeholder={props.place}  name="" id="" /> </label>
    </div>
  )
}
