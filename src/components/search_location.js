import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import weather_api from './weather_api';

const SearchLocation = (weatherdata) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const grabData = async (e) => {
    try {
      await weather_api(e).then((res) => setWeather(res));
      if (weather !== undefined && weather !== null) {
        setLoading(false);
        console.log('SET');
        weatherdata.weatherdata({ loading: loading, data: weather });
        console.log(weather);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [search, setSearch] = useState(null);
  let input = React.createRef() || '';

  const handleKeyPress = (e) => {
    setSearch(input.current.value);
    if (e.key === 'Enter') {
      setSearch(input.current.value);
      if (input.current.value !== null) {
        grabData({ zipCode: search });
        document.querySelector('.search-location').className =
          'search-location search-location__searched';
      }
    }
  };

  return (
    <div className='search-location'>
      <input
        type='text'
        ref={input}
        onKeyPress={handleKeyPress}
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
