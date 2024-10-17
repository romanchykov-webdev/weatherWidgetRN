
import {NavigationContainer} from "@react-navigation/native"; // Импортируем контейнер навигации для управления навигацией в приложении.
import {createNativeStackNavigator} from "@react-navigation/native-stack"; // Импортируем функцию для создания стека навигации с поддержкой нативных переходов.

import {LogBox} from "react-native";
import Index from './index'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state' // Игнорируем предупреждение о не сериализуемых значениях в состоянии навигации.
])

const Stack = createNativeStackNavigator(); // Создаем стек навигации для приложения, где будет управляться переход между экранами.

export const RootLayout = () => { // Экспортируем компонент RootLayout как основной компонент навигации.
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="index" options={{headerShown: false}} component={Index}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
