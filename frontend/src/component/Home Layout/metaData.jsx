import React from 'react'
import './layout.css'
import Helmet from 'react-helmet'
function MetaData({title}) {
    return (
        <Helmet><title>{title}</title></Helmet>
    )
}

export default MetaData