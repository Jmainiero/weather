import ClearSkyD from '../css/openweathermap/01d.svg';
import ClearSkyN from '../css/openweathermap/01n.svg';
import FewCloudsD from '../css/openweathermap/02d.svg';
import FewCloudsN from '../css/openweathermap/02n.svg';
import ScatteredCloudsD from '../css/openweathermap/03d.svg';
import ScatteredCloudsN from '../css/openweathermap/03n.svg';
import BrokenCloudsD from '../css/openweathermap/04d.svg';
import BrokenCloudsN from '../css/openweathermap/04n.svg';
import RainShowerD from '../css/openweathermap/09d.svg';
import RainShowerN from '../css/openweathermap/09n.svg';
import RainD from '../css/openweathermap/10d.svg';
import RainN from '../css/openweathermap/10n.svg';
import ThunderstormsD from '../css/openweathermap/11d.svg';
import ThunderstormsN from '../css/openweathermap/11n.svg';
import SnowD from '../css/openweathermap/13d.svg';
import SnowN from '../css/openweathermap/13n.svg';
import FogD from '../css/openweathermap/50d.svg';
import FogN from '../css/openweathermap/50n.svg';

const weatherCodes = {
  '01d': {
    status: 'Clear Sky',
    icon: ClearSkyD,
  },
  '02d': {
    status: 'Few Clouds',
    icon: FewCloudsD,
  },
  '03d': {
    status: 'Scattered Clouds',
    icon: ScatteredCloudsD,
  },
  '04d': {
    status: 'Broken Clouds',
    icon: BrokenCloudsD,
  },
  '09d': {
    status: 'Rain Shower',
    icon: RainShowerN,
  },
  '10d': {
    status: 'Rain',
    icon: RainD,
  },
  '11d': {
    status: 'Thunderstorms',
    icon: ThunderstormsD,
  },
  '13d': {
    status: 'Snow',
    icon: SnowD,
  },
  '50d': {
    status: 'Fog',
    icon: FogD,
  },
  '01n': {
    status: 'Clear Sky',
    icon: ClearSkyN,
  },
  '02n': {
    status: 'Few Clouds',
    icon: FewCloudsN,
  },
  '03n': {
    status: 'Scattered Clouds',
    icon: ScatteredCloudsN,
  },
  '04n': {
    status: 'Broken Clouds',
    icon: BrokenCloudsN,
  },
  '09n': {
    status: 'Rain Shower',
    icon: RainShowerN,
  },
  '10n': {
    status: 'Rain',
    icon: RainN,
  },
  '11n': {
    status: 'Thunderstorms',
    icon: ThunderstormsN,
  },
  '13n': {
    status: 'Snow',
    icon: SnowN,
  },
  '50n': {
    status: 'Fog',
    icon: FogN,
  },
};

export default weatherCodes;
