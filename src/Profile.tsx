import { Button, Text, View } from "react-native"

const Profile = ({navigation}) => {

    return     <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>

}
export default Profile