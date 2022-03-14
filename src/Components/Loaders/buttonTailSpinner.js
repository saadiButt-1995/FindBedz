import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const Spinner = () => {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <TailSpin
                heigth="40"
                width="40"
                color='#151515'
                ariaLabel='loading'
            />
        </div>
        </>
    )
}


export default Spinner