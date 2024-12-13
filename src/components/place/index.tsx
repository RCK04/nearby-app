import { TouchableOpacity, Image, View, Text } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";
import { s } from "./styles"
import { colors } from "@/styles/theme";

export function Place(){
    return (
        <TouchableOpacity style={s.container}>
            <Image style={s.image} />

            <View style={s.content}>
                <Text style={s.name}>

                </Text>

                <Text style={s.description}>

                </Text>

                <View style={s.footer}>
                    <IconTicket size={16} color={colors.red.base} />
                    <Text style={s.tickets}>

                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}