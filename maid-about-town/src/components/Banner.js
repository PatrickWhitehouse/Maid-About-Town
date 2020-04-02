import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Banner = ({ title, subtitle, image }) => {
    const bannerImageQuery = useStaticQuery(graphql`
query MyQuery {
  allFile {
    edges {
      node {
        id
        childImageSharp {
          original {
            src
          }
          fluid {
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`)

    const findImage = bannerImageQuery.allFile.edges.find(({ node }) => node.childImageSharp.original.src === image);
    return (
        <div className="banner relative flex justify-start items-center px-10">
            <div className="banner__content mt-10 relative z-10 text-4xl text-white">
                <span className="block title">{title}</span>
                <span className="block subtitle">{subtitle}</span>
            </div>
            <Img fluid={findImage.node.childImageSharp.fluid} alt={title} className="w-full h-full absolute top-0 left-0 object-cover z-0" style={{ position: "absolute" }} />
        </div >
    )
}



export default Banner