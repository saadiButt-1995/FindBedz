import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const Spinner = () => {
    return (
        <>
        <TailSpin
            heigth="30"
            width="30"
            color='#ffff'
            ariaLabel='loading'
        />
        </>
    )
}


export default Spinner