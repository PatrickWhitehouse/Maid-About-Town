import React from 'react'

const Banner = ({ title, subtitle, image }) => (
    <div className="banner">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
    </div>
)

export default Banner