import { View } from 'react-native';
import { HomeScreen } from '../pages';

const DATA = [
    { backgroundColor: "#bcb9d0" },
    { backgroundColor: "#b0c6e7" },
    { backgroundColor: "#b6d7d7" },
    { backgroundColor: "#74b4d8" },
    { backgroundColor: "#fd9975" }
];

const ROUTES = [
    { name: "ποπθλο", component: HomeScreen, icons: 'ballot', title: 'ποπθλο' },
    { name: 'vιρτθτε', component: View, icons: 'contactless-payment-circle-outline', title: 'vιρτθτε' },
    { name: 'ιντερεσσετ', component: View, icons: 'bell-outline', title: 'ιντερεσσετ' },
    { name: 'Vιταε', component: View, icons: 'menu', title: 'Vιταε' }
];

export {
    DATA,
    ROUTES
}