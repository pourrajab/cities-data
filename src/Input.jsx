import { useState, useEffect } from "react";
import citiesData from "./cities.json";
import styles from "./Input.module.css";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = citiesData.filter(
        (city) => city.startsWith(searchTerm)
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [searchTerm]);

  const handleCityClick = (city) => {
    setSearchTerm(city); 
    setFilteredCities([]); 
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city..."
      />
      {!!searchTerm.length && filteredCities.length > 0 && (
        <div className={styles.searchResult}>
          <ul>
            {filteredCities.map((city, index) => (
              <li key={index} onClick={() => handleCityClick(city)}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Input;
