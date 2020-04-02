import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Banner = ({ title, subtitle, image }) => {
    const patrickQuery = useStaticQuery(graphql`
query MyQuery {
  allImageSharp {
    edges {
      node {
        original {
          src
        }
      }
    }
  }
}

    `)
    const myTest = patrickQuery.allImageSharp.edges.find(e => e.node.original.src === image);
    console.log(myTest);
    console.log(patrickQuery);


    return (
        <div className="banner relative flex justify-start items-center px-10">
            <div className="banner__content mt-10 relative z-10 text-4xl text-white">
                <span className="block title">{title}</span>
                <span className="block subtitle">{subtitle}</span>
            </div>
            <img src={image} alt={title} className="w-full h-full absolute top-0 left-0 object-cover z-0" />
        </div >
    )
}



export default Banner