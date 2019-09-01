import { WeatherDay } from './weather-day';

export interface Location {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    weatherDay?: WeatherDay;
    hide?: boolean;
}