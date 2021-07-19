import Items from './Items'
import ItemLink from './ItemLink'

function AutocompleteContainer({showAutocompleteContainer, setShowAutocompleteContainer}) {
    

    return (
      
      <div className={`AutocompleteContainer`}>
        {Items.map((item, index) => (
            <div key={index}>
              <ItemLink item={item} index={index} showAutocompleteContainer={showAutocompleteContainer} setShowAutocompleteContainer={setShowAutocompleteContainer} />
            </div>)
            )}
      </div>
    );
  }
  
  export default AutocompleteContainer;