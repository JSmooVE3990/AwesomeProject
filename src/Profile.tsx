import { Button, Text, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./types/types";

type ProfileScreenNavigationProp = StackNavigationProp<StackParamList, 'Profile'>;

const Profile = ({ navigation }: { navigation: ProfileScreenNavigationProp })  => {

    return     <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>

}
export default Profile