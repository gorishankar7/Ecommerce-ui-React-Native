import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';


const products = [
  {
    uri: require('../assests/img/laptopforsell.png'),
    title: 'Asus Zen Laptop 1',
    model: 'Asus',
    price: '2399',
    qty: 1,
  },

  {
    uri: require('../assests/img/laptopforsell.png'),
    title: 'Lenovo S2 Rexo',
    model: 'Z1',
    price: '5399',
    qty: 1,
  },

  {
    uri: require('../assests/img/laptopforsell.png'),
    title: 'Asus Zen Laptop',
    model: 'Asus',
    price: '2399',
    qty: 1,
  },
];

class ListItem extends React.Component {
  render() {
    const { navigation } = this.props;
    const {item} = this.props;

    return (
      <ScrollView>
        <View style={{backgroundColor: '#d1d2e0'}}>
          <View style={styles.cartview}>
            <View style={styles.circle}>
              <Image style={styles.addedimg} source={item.uri}></Image>
            </View>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                marginLeft: 10,
                marginBottom: 10,
                flex: 0.8,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#3e45aa'}}>
                {item.title}
              </Text>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#3e45aa'}}>
                {item.price}
              </Text>
            </View>

            <TouchableOpacity style={{width: 40, flex: 0.1, marginRight: 10, justifyContent: 'center'}}  onPress={this.props.removeItem}>
             
              <Image style={{margin: 5, width: 20, height: 20, resizeMode: 'stretch'}} source={require("../assests/img/remove.png")}>
              </Image>
              
            </TouchableOpacity>

            <View style={{width: '20%', flex: 0.1, justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.qtybtn}
                onPress={this.props.onSubtract}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>-</Text>
              </TouchableOpacity>
              <Text style={{margin: 5, fontSize: 16, fontWeight: 'bold'}}>
                {item.qty}
              </Text>
              <TouchableOpacity
                style={styles.qtybtn}
                onPress={this.props.onAdd}>
                <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class App extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].qty -= 1;
    if(products[index].qty <= 0){
      // products[index].qty = 1;
      const prdIndex = products[index];
      products.splice(index, 1); 
    }
    this.setState({products});
  };

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].qty += 1;
    this.setState({products});
  };

  removeItem = (item, index) => {
    const products = [...this.state.products];
    const prdIndex = products[index];
    products.splice(index, 1); 
    this.setState({products});
  };


  render() {
    const {products} = this.state;
    let totalqty = 0;
    let totalPrice = 0;
    products.forEach(item => {
      totalqty += item.qty;
      totalPrice += item.qty * item.price;
    });

    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.state.products}
          renderItem={({item, index}) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
              removeItem={() => this.removeItem(item, index)}

            />
          )}
          keyExtractor={(item, index) => index.toString()
          }        />


        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              maxWidth: '100%',
              marginRight: 120,
              justifyContent: 'flex-start',
              paddingRight: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
              Total:
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              $
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              {totalqty}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              maxWidth: '100%',
              justifyContent: 'flex-end',
              paddingRight: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>
              Total:
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              $
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              {totalPrice}
            </Text>
          </View>
        </View>
        {/* 
        <Text>Total qty: {totalqty}</Text>
        <Text>Total Price: {totalPrice}</Text> */}

        <TouchableOpacity
          style={styles.cartbtn}
          onPress={() => alert('Order Place Succesfully')}>
          <Text style={styles.txtcart}>Place Order</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  addedimg: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderRadius: 5,
    resizeMode: 'contain',
  },

  cartview: {
    backgroundColor: '#fff',
    borderRadius: 10,
    maxHeight: '100%',
    height: 100,
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cartbtn: {
    maxWidth: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#060a56',
  },
  txtcart: {
    fontFamily: 'Roboto',
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
  },
  qtybtn: {
    width: 22,
    height: 22,
    backgroundColor: '#a1dbf5',
    borderRadius: 50,
    justifyContent: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    flex: 0,
    margin: 10,
    padding: 2,
    borderRadius: 150 / 2,
    backgroundColor: '#faddcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
