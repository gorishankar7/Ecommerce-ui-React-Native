import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProductDetailScreen({navigation}) {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={styles.productsDetails}
          onPress={() => alert('Click on Add to Cart')}>
          <Image
            style={styles.productimg}
            source={navigation.getParam('uri')}></Image>
          <View style={styles.prddetailscard}>
            <Text style={styles.prdtitle}>{navigation.getParam('title')}</Text>
            <Text style={styles.prdmodel}>{navigation.getParam('model')}</Text>
            
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.prdprice}>{navigation.getParam('price')}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cartbtn}
            onPress={() =>
              navigation.navigate('AddtoCart', {
                uri: navigation.getParam('uri'),
                title: navigation.getParam('title'),
                model: navigation.getParam('model'),
                price: navigation.getParam('price'),
                qty: navigation.getParam('qty'),
              })
            }>
            <Text style={styles.txtcart}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 20}}>
          Gain more with offers (4)
        </Text>
        <Text style={{maxWidth: '100%', margin: 20}}>
          Shop for Rs 5000 and over and get instant discount up to Rs 5000. T&C
          Shop for 20,000 & more and get instant discount of Rs 1000. Use code
          “JUN1000” on shopping cart. T&C Buy 2 years Extended Warranty and get
          10% discount on RCP value. T&C Buy 3 years Extended Warranty and get
          20% discount on RCP value. T&C
        </Text>

        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 20}}>
          Key Features
        </Text>

        <Text style={{maxWidth: '100%', margin: 20}}>
          Intel Core i7-9750H Processor Windows 10 Operating System 39.62 cm
          (15.6 Inch) Ultra HD Wide View Display Mobile Intel HM370 Express
          Chipsets NVIDIA GeForce RTX 2060 Graphics Audio-In Combo Jack, Harmon/
          Kardon Built-In Speaker And Microphone Built-In Array Microphone, HD
          IR Camera Base Frequency: 2.60 GHz, Max Tubro Frequency: 4.50 GHz
        </Text>

        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 20}}>
          Description
        </Text>

        <Text style={{maxWidth: '100%', margin: 20}}>
          Ensure your efficiency levels are on point with the Asus 39.62 cm
          (15.6 inch) Laptop (9th Gen Core i7/2.6 GHz/32 GB/1 TB),
          UX581GV-H2036T which blends together functionality with style packing
          in a sleek look with efficient performance. It has powerful storage
          capacity and efficient RAM which lets you store a huge amount of
          important data and enjoy lag-free operation respectively. The Windows
          10 operating system and powerful Processor helps you perform your
          regular activities along with fun games. The 39.62 cm (15.6-inch)
          Ultra HD display allows you to enjoy watching videos and playing games
          a more enjoyable experience. While the NVIDIA GeForce RTX 2060
          Graphics memory gives you delightful gaming experience.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 130,
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  productsDetails: {
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#d1d2e0',
  },
  prddetailscard: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    maxWidth: '100%',
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  productimg: {
    width: 300,
    height: 300,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  prdtitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  prdmodel: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  prdprice: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  currency:{
    fontFamily: 'Roboto',
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
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
});
