import AutocompleteContainer from "./AutcompleteContainer";
import React, { useState } from 'react'

function Header() {
    const [showAutocompleteContainer, setShowAutocompleteContainer] = useState(false)
    return (
      <div className="Header"
        
       
      >
        <input type="text" 
          class="" 
          placeholder="Click on this to show the drop down auto complete" 
          tabindex="1" 
          autocomplete="off" 
          onClick={() => setShowAutocompleteContainer(!showAutocompleteContainer)}
          maxlength="2048">
        </input>
        {showAutocompleteContainer && <AutocompleteContainer showAutocompleteContainer={showAutocompleteContainer} setShowAutocompleteContainer={setShowAutocompleteContainer}/>          
}
        
      </div>
    );
  }
  
  export default Header;