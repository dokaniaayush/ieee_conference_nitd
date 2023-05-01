import React from 'react'
import NationalData from '../db/NationalData'
import Card from './Card'

const NationalAdvisoryComittee = () => {
  return (
    <div
        id='national_advisory_committee'
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
        NationalData.map((data)=>{
          return(
            <Card key={data.id} name={data.name} description={data.description} email={data.email}/>
          )
      })
      }        
      </div>
  )
}

export default NationalAdvisoryComittee