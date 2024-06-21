import React from "react";
import { FlatList, Text, View} from "react-native";

import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { Avatar } from "@/components/avatar";
import Email from "@/components/email";
import { EMAILS } from "@/utils/emails";
import FloatButton from "@/components/floatButton";

const foto = "https://media.licdn.com/dms/image/C4D03AQHAM9ypqXO6iw/profile-displayphoto-shrink_800_800/0/1632914794600?e=1724284800&v=beta&t=ZnzlZVGc9DVesdFdNfRWGMgsBvgUkhYpAwDxFj-jqUE";

export default function Home() {
    return(
        <View className="flex-1 pt-14 p-4 bg-gray-900">
            <Input>
                <MenuButton/>
                <Input.Field  placeholder="Pesquisar no email"/>
                <Avatar source={{uri: foto}}/>
            </Input>

            <FlatList 
                data={EMAILS}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=> <Email data={item}/>}
                contentContainerClassName="gap-6"
                ListHeaderComponent={()=>(
                    <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
                        Entrada
                    </Text>
                )}
            />
            <FloatButton icon="edit"/>
        </View>
    )
};
