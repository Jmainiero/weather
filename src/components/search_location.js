import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import weather_api from './weather_api';

const SearchLocation = ({ setWeather, setLoading }) => {
  const grabData = async (e) => {
    try {
      await weather_api(e).then((res) => {
        setWeather(res);
        setLoading(false);
      });
    } catch (e) {
      console.error(e);
    }
  };
  let input = React.createRef();

  const handleKeyPress = (event) => {
    let newInput = event.target.value;
    if (event.key === 'Enter') {
      setLoading(true);
      grabData({ zipCode: newInput });
      document.querySelector('.search-location').className =
        'search-location search-location__searched';
    }
  };

  return (
    <div className='search-location'>
      <input
        type='text'
        ref={input}
        onKeyDown={handleKeyPress}
        placeholder='Press Enter to Search'
      />
      <button>
        <FontAwesomeIcon
          icon={faSearch}
          size='2x'
          className='search-location--search'
        />
      </button>
    </div>
  );
};

export default SearchLocation;
