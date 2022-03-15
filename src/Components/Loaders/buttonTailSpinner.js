import React, { useState } from 'react'
import { TailSpin } from  'react-loader-spinner'

const Spinner = ({width, height}) => {

    const [h] = useState(height?height:'40')
    const [w] = useState(width?width:'40')
    
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <TailSpin
                heigth={h}
                width={w}
                color='#151515'
                ariaLabel='loading'
            />
        </div>
        </>
    )
}


export default Spinner