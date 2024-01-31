import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from './types/types';
import {useState} from 'react';
import {Center} from 'native-base';

type Menu = {
  menuCoffees: Coffee[];
};

type Order = {
  orderCoffees: Coffee[];
};
type CafeScreenNavigationProp = StackNavigationProp<StackParamList, 'Cafe'>;
type Coffee = {
  name: string;
  cost: number;
};

const coffees: Coffee[] = [
  {name: 'Cappuccino', cost: 12},
  {name: 'Espresso', cost: 4},
  {name: 'Macchiato', cost: 6},
  // Add more coffee items as needed
];

const Cafe = ({navigation}: {navigation: CafeScreenNavigationProp}) => {
  const [order, setOrder] = useState<Order>({orderCoffees: []});
  const [total, setTotal] = useState<number>(0);

  const menu: Menu = {menuCoffees: coffees};

  const onClickMenuHandler = (coffee: Coffee) => {
    setOrder(prevOrder => ({
      orderCoffees: [...prevOrder.orderCoffees, coffee],
    }));
  };

  const calculateTotal = (): number => {
    let total = 0;
    total = order.orderCoffees.reduce(
      (total, coffee) => total + coffee.cost,
      0,
    );
    setTotal(total);
    return order.orderCoffees.reduce((total, coffee) => total + coffee.cost, 0);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* First Scrollable List (Menu) */}
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Menu</Text>
        <FlatList
          data={menu.menuCoffees}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => onClickMenuHandler(item)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Second Scrollable List (Order) */}
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Order</Text>
        <FlatList
          data={order.orderCoffees}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <Button title="Total" onPress={() => calculateTotal()} />
        <Text>Total = {total}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Cafe;
