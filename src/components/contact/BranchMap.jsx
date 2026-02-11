import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api'
import React from 'react'

const BranchMap = ({branches, activeBranch, onSelect}) => {
  return (
    <GoogleMap 
        mapContainerStyle={{width:"100%", height:"420px"}}
        center={activeBranch.position}
        zoom={7}
        options={{
            streetViewControl:false,
            mapTypeControl:false,
        }}
    >
        {branches.map((branch)=>(
            <Marker
                key={branch.id}
                position={branch.position}
                onClick={()=> onselect(branch)}
            />
            
        ))}

        <InfoWindow position = {activeBranch.position}>
            <div className='text-sm'>
                <strong>{activeBranch.lable}</strong>
                <p>{activeBranch.address}</p>

            </div>
                

        </InfoWindow>
        

    </GoogleMap>
  )
}

export default BranchMap