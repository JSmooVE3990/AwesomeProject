import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./types/types";
import { useState } from "react";

type Menu = {
  menuCoffees: Coffee[],
}

type Order = {
  orderCoffees: Coffee[],
}
type CafeScreenNavigationProp = StackNavigationProp<StackParamList, 'Cafe'>;
type Coffee = {
    name: string,
    cost: number,
}

const coffees: Coffee[] = [
    {  name: 'Cappuccino', cost: 12 },
    { name: 'Espresso', cost: 4 },
    { name: 'Macchiato',cost: 6 },
    // Add more coffee items as needed
  ];


const Cafe = ({ navigation }: { navigation: CafeScreenNavigationProp }) => {
  const [order, setOrder] = useState<Order>({ orderCoffees: [] });
  const [total, setTotal] = useState<number>();

  const menu: Menu = { menuCoffees: coffees };

  const onClickMenuHandler = (coffee: Coffee) => {
    setOrder((prevOrder) => ({
      orderCoffees: [...prevOrder.orderCoffees, coffee],
    }));
  };

  const calculateTotal = (): number => {
    let total = order.orderCoffees.reduce((total, coffee) => total + coffee.cost, 0);
    setTotal(total);
    return order.orderCoffees.reduce((total, coffee) => total + coffee.cost, 0);
  };

  return( 
    <View>
        {/* First Scrollable List (Menu) */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Menu</Text>
        <FlatList
          data={menu.menuCoffees}
          renderItem={({ item }) => {
            console.log(item)
            return(
            <TouchableOpacity onPress={() => onClickMenuHandler(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
  )
          }
          }
        />
      </View>

      {/* Second Scrollable List (Order) */}
      <View >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order</Text>
        <FlatList
          data={order.orderCoffees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      </View>
      <Button
        title="Total"
        onPress={() => calculateTotal()}
      />
      <Text>{total}</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>)
    
}

export default Cafe;