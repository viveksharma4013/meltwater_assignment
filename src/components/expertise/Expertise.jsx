import React, { useContext, useState } from 'react'

function Expertise({name, setMasterExpertise}) {
    const [expertise, setexpertise] = useState(new Set)
    function addExpertise(e){
        let isChecked = e.target.checked
        if(isChecked){
            setexpertise(prevState=> new Set([...prevState, e.target.name]))
        }else{
            expertise.delete(e.target.name)
            setexpertise(new Set([...expertise]))
        }
    }
  return (
   <div>
     <h4>Hi {name}</h4>
     <h4>What are your expertise?</h4>
     <input type='checkbox' onChange={e => addExpertise(e)} name="cooking"/>
     <label for="cooking"> Cooking</label>
     <input type='checkbox'onChange={e => addExpertise(e)} name="driving"/>
     <label for="driving"> Driving</label>
     <input type='checkbox' onChange={e => addExpertise(e)} name="dancing"/>
     <label for="dancing"> Dancing</label>
   </div>
  )
}

export default Expertise