import React from "react"
import { graphql } from "gatsby"

const CardComponent = ({ data }) => <p>{JSON.stringify(data, null, 4)}</p>

export const query = graphql`
  {
    allCleanJson {
      edges {
        node {
          uniqueID
          properties {
            name
            traits {
              traitname
            }
            class {
              classname
            }
            cost
            credits
            encounter
            flavortext
            hidden
            image
            health
            ruletext
            ruling
            set
            sanity
            setnumber
            slot {
              slotname
            }
            testicons {
              iconname
            }
            type
            xp
          }
        }
      }
    }
  }
`

export default CardComponent
