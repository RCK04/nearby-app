import { Image, Text, View } from "react-native";
import { s } from "./styles" 

export function Welcome(){
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo} />

            <Text style={s.title}>Boas vidas ao Nearby!</Text>

            <Text style={s.subtitle}>
                Tenha cupons de vantagem para usar em seus estabeleciomentos favoritos
            </Text>

        </View>
    )
}