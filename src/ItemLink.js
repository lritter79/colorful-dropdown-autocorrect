import React, { useState } from 'react'

function ItemLink({item, index}) {    
  const [hasMouseOver, setHasMouseOver] = useState(false)
  const textColorFunction = (color) => {
    if (color.includes("light")){
      return "dark"
    }else {
      return ""
    }
  }
    return (
            <a key={index} 
            onMouseEnter={() => setHasMouseOver(true)}
        onMouseLeave={() => setHasMouseOver(false)}
            style={{backgroundColor: hasMouseOver ? `light${item.color}` : item.color}}  class="tag-link" href="https://bandcamp.com/tag/electronic?from=autocomplete">
                <div className={`item-link ${hasMouseOver ? textColorFunction(`light${item.color}`): textColorFunction(item.color)}`}>
                  {item.link}
                </div>
                <div className="shape-container">
                    <span className="arrow"></span>
                </div>
            </a>
    );
  }
  
  export default ItemLink;