const apiUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const todayCases = document.querySelector('.todayCases');
const todayDeaths = document.querySelector('.todayDeaths');
const cases = document.querySelector('.cases');
const recovered = document.querySelector('.recovered');
const deaths = document.querySelector('.deaths');
const results = document.querySelector('.results');
const form = document.querySelector('.form');
const searchBtn = document.querySelector('.searchBtn');
const country = document.querySelector('.country-name');
const country_name = document.querySelector('.country_name');

// loading.style.display = 'none';
results.style.display = 'none';

const searchCountry = async (countryName) => {
  // loading.style.display = 'block';
  errors.innerHTML = '';
  try {
    const response = await axios.get(`${apiUrl}/${countryName}`);
    if (response.data === 'Country not found') {
      throw error;
    }
    // loading.style.display = 'none';
    country_name.innerHTML = response.data.country;
    todayCases.innerHTML = response.data.todayCases;
    todayDeaths.innerHTML = response.data.todayDeaths;
    cases.innerHTML = response.data.cases;
    recovered.innerHTML = response.data.recovered;
    deaths.innerHTML = response.data.deaths;
    country.value = '';
    results.style.display = 'block';
  } catch (error) {
    // loading.style.display = 'none';
    results.style.display = 'none';
    errors.innerHTML = 'Tizmda xatolik bor qaytadan urinib koring!';
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  searchCountry(country.value);
};

form.addEventListener('submit', (e) => handleSubmit(e));
