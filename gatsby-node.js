/*exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

 
  const typeDefs = `

    
    
    type Card implements Node @childOf(types: ["ContentJson"], many: true) {
    	uniqueID: String!
    	internalinfo: String  

    }
    
    type ContentJson implements Node  {
      content: [Card!]!
    }
  `
  createTypes(typeDefs)
  }
  */
