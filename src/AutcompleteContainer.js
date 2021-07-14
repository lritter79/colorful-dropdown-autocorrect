import Items from './Items'
import ItemLink from './ItemLink'

function AutocompleteContainer({showAutocompleteContainer}) {
    

    return (
      <div className={`AutocompleteContainer ${showAutocompleteContainer ? "" : "dont-show"}`}>
        {Items.map((item, index) => (
            <ItemLink item={item} index={index} />
        ))}
      </div>
    );
  }
  
  export default AutocompleteContainer;