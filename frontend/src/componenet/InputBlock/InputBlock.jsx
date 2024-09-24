

const InputBlock = (prop) => {
  return (
   <>
    <div className={prop.twDivClass}>
        <label className={prop.twLblClass} htmlFor={prop.IpObj.id}>{prop.IpObj.title}</label>
        <input className={prop.twInpClass} min={prop.IpObj.min} minLength={prop.IpObj.minLen} max={prop.IpObj.max} maxLength={prop.IpObj.maxLen} id={prop.IpObj.id} type={prop.IpObj.type} name={prop.IpObj.id} placeholder={prop.IpObj.placeholder} />
    </div>
   </>
  )
}

export default InputBlock