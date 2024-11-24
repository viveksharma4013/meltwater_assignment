import React, { createContext, useContext, useState } from 'react'
import Introduction from '../introduction/Introduction'
import './Container.css'
import Expertise from '../expertise/Expertise'
import Brands from '../brands/Brands'

function Container() {
    const [page_number, setPage_number] = useState(1)
    const [userName, setuserName] = useState("Naomi")
    const [expertise, setExpertise] = useState([])

    const pages={
        1:<Introduction setuserName = {setuserName}/>,
        2:<Expertise name={userName}/>,
        3:<Brands number={userName}/>
    }

    function getCurrentPage(){
        return pages[page_number];
    }

    function increasePageNumber(){
        if(page_number<Object.keys(pages).length){
            setPage_number(page_number+1);
        }
    }
    function decreasePageNumber(){
        if(page_number>1){
            setPage_number(page_number-1);
        }
    }
  return (
    // <UserContext.Provider value="vivek">
        <div className='container'>
            {getCurrentPage()}
            <div id='pageInfo'>
            <p id='back_button' onClick={decreasePageNumber}>Back</p>
            <p id='page_number'>{page_number}/{Object.keys(pages).length}</p>
            <p id='next_button' onClick={increasePageNumber}>Next</p>
            </div>
        </div>
    // </UserContext.Provider>
  )
}

export default Container