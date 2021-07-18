import Items from './Items'
import ItemLink from './ItemLink'

function AutocompleteContainer({showAutocompleteContainer, setShowAutocompleteContainer}) {
    

    return (
      <div className={`AutocompleteContainer ${showAutocompleteContainer ? "" : "dont-show"}`}>
        {Items.map((item, index) => (
            <div key={index}>
              <ItemLink item={item} index={index} setShowAutocompleteContainer={setShowAutocompleteContainer} />
            </div>
            
        ))}
      </div>
    );
  }
  
  export default AutocompleteContainer;