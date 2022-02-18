import React from 'react'
import { Wrapper } from "./Container.styled"
import PropTypes from "prop-types"



const Container = ({ children, dflex, between, center, around, full }) => {
    return (
        <Wrapper dflex={dflex} between={between} center={center} around={around} full={full}>
            {children}
        </Wrapper>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container
