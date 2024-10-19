import * as Location from 'expo-location';

export const getCityByLocation = async () => {
    try {
        // Запрос разрешения на доступ к геолокации
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Permission to access location was denied');
        }

        // Получаем текущие координаты
        let currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;

        // Запрос к API обратного геокодирования (например, OpenStreetMap)
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();

        // Извлекаем название города (или населённого пункта)
        const city = data.address.city || data.address.town || data.address.village;

        if (!city) {
            throw new Error('City not found');
        }

        return city;
    } catch (error) {
        console.error('Error fetching city:', error);
        throw error; // Можно выбросить ошибку для обработки в вызывающем коде
    }
};
