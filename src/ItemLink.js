import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ItemLink({item, index, setShowAutocompleteContainer}) {    
  const [hasMouseOver, setHasMouseOver] = useState(false)
  const textColorFunction = (color) => {
    if (color.includes("light")){
      return "dark"
    }else {
      return ""
    }
  }
    return (
            <div 
            onMouseEnter={() => setHasMouseOver(true)}
        onMouseLeave={() => setHasMouseOver(false)}
            style={{backgroundColor: hasMouseOver ? `light${item.color}` : item.color}}  class="tag-link">
                
                  <Link to={`/${index + 1}`} onClick={() => setShowAutocompleteContainer(false)}>
                  <div className={`item-link ${hasMouseOver ? textColorFunction(`light${item.color}`): textColorFunction(item.color)}`}>
                    {item.link}
                    <span className="arrow"></span>
                </div>
                    </Link>
                  

            </div>
    );
  }
  
  export default ItemLink;