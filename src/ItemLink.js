import React, { useState } from 'react'

function ItemLink({item, index}) {    
  const [hasMouseOver, setHasMouseOver] = useState(false)
    return (
            <a key={index} 
            onMouseEnter={() => setHasMouseOver(true)}
        onMouseLeave={() => setHasMouseOver(false)}
            style={{backgroundColor: hasMouseOver ? `light${item.color}` : item.color}}  class="tag-link" href="https://bandcamp.com/tag/electronic?from=autocomplete">
                <div className="item-link">{item.link}</div>
                <div className="shape-container">
                    <span className="arrow"></span>
                </div>
            </a>
    );
  }
  
  export default ItemLink;