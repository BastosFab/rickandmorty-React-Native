import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_ROUTER_OPTIONS } from "../../constants/router";
import LocationListScreen from "../screen/LocationListScreen"
import LocationScreen from "../screen/LocationScreen";

const LocationsRouter = () => {
    const Locations = createNativeStackNavigator();

    const renameTitle = (title) => {
        if(title.length > 15) {
            return title.slice(0, 15) + '...'
        }
        return title;
    }

    return (
        <Locations.Navigator
            screenOptions={STACK_ROUTER_OPTIONS}
        >
            <Locations.Screen
                name="Home"
                component={LocationListScreen}
                options={{
                    title: 'locations'
                }}
            />
            <Locations.Screen
                name="Location"
                component={LocationScreen}
                options={({ route }: any) => ({
                    title: renameTitle(route.params.name)
                })}
            />
        </Locations.Navigator>
    )
}

export default LocationsRouter;