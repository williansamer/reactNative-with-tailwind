import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type FloatButton = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
}

export default function FloatButton({icon, ...rest}: FloatButton) {
    return( 
        <TouchableOpacity 
            style={styles.touchableOpacity}
            // className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center"
            activeOpacity={0.75}
            {...rest}
        >
            { icon && (
                    <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
            )}
            <Text className="font-subtitle text-orange-500">Escrever</Text>
        </TouchableOpacity>
)};

const styles = StyleSheet.create({
    touchableOpacity: {
        position: "absolute",
        bottom: 16,
        right: 16,
        gap: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 32, 
        paddingVertical: 16,
        borderRadius: 9999,
        backgroundColor: "rgb(68 69 71)"
    }
  });
  