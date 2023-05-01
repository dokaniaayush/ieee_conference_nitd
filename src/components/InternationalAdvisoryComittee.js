import React from 'react'
import InternationalData from '../db/InternationalData'
import Card from './Card'

const InternationalAdvisoryComittee = () => {
  return (
    <div
        id='international_advisory_committee'
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderColor: "black",
          borderWidth: "2px",
          backgroundColor: "rgb(39, 48, 83)",
          width: "100%",
        }}
      >
      {
        InternationalData.map((data)=>{
          return(
            <Card key={data.id} name={data.name} description={data.description} email={data.email}/>
          )
      })
      }        
      </div>
  )
}

export default InternationalAdvisoryComittee