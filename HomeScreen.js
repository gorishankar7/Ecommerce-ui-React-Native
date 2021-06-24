//created by Gorishankar Puniya 

import React, {Component} from 'react';
import {
  Text,
  InputText,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {

  render() {
    const[review, setReview] 
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.circle}>
              <Image
                style={styles.personicon}
                source={require('./assests/img/faceicon.png')}></Image>
            </View>

            <Text style={styles.title}>Godax</Text>
            <Image
              style={styles.searchicon}
              source={require('./assests/img/search.png')}></Image>
          </View>
          <View></View>

          <View style={styles.cardview}>
            <View style={styles.cardinside}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#b4b5ca',
                  marginTop: 20,
                  marginLeft: 10,
                }}>
                Zenbook Duo
              </Text>

              <Text
                style={{
                  fontSize: 32,
                  color: '#ffffff',
                  marginTop: 10,
                  marginLeft: 10,
                  marginEnd: 50,
                }}>
                Unbelievable Visual & Performance
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.cartBuybtn}
                  onPress={() => alert('hello')}>
                  <Text style={styles.buytxt}>Buy Now</Text>
                </TouchableOpacity>

                <Image
                  style={styles.cardproduct}
                  source={require('./assests/img/laptopforsell.png')}></Image>
              </View>
            </View>
          </View>

          <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}  style={styles.filterrow}>
            <TouchableOpacity style={styles.filtercard}>
              <Text style={styles.cardtxt}>Laptop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filtercard}>
              <Text style={styles.cardtxt}>Computer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filtercard}>
              <Text style={styles.cardtxt}>HeadPhone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filtercard}>
              <Text style={styles.cardtxt}>Earphone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filtercard}>
              <Text style={styles.cardtxt}>Charger</Text>
            </TouchableOpacity>
        
          </ScrollView>

          <View>
            <Text style={{fontSize: 20, fontFamily: 'Roboto', marginLeft: 20, marginTop:10, fontStyle: 'bold'}}>
              Products
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}  style={styles.productsScroll}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>

            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.products}>
              <Image style={styles.productimg}
                source={require('./assests/img/laptopforsell.png')}></Image>
                <View style={{backgroundColor:'#fff', justifyContent: 'center', borderRadius: 10, maxWidth: '100%', height: 50, marginLeft: 20, marginRight: 20, marginBottom: 10}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 10, color: 'black', alignSelf: 'center' }}>Pro Arts Studio</Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 8, color: 'black', alignSelf:'center',}}>Asus </Text>
                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontStyle: 'bold', alignSelf:'center',}}>$2338</Text>

                </View>
            </TouchableOpacity>

            </View>

          </ScrollView>

        </ScrollView>
      </SafeAreaView>
    );
  }
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
  circle: {
    width: 70,
    height: 70,
    flex: 0,
    margin: 10,
    padding: 2,
    borderRadius: 150 / 2,
    backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  personicon: {
    width: 50,
    height: 50,
  },
  searchicon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  cardview: {
    margin: 24,
    height: 250,
    padding: 10,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#050743',
  },
  cartBuybtn: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#f3694a',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buytxt: {
    fontSize: 16,
    margin: 5,
    alignSelf: 'center',
    fontFamily: 'Roboto',
    color: '#ffffff',
  },
  cardproduct: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginLeft: 60,
    marginBottom: 10,
  },
  selectedfiltercard: {
    width: 80,
    height: 50,
    borderRadius: 10,
    color: '#060a56',
  },
  filterrow: {
    maxHeight: '100%',
    height: 90, 

  },
  filtercard: {
    width: 100,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#060953',
    borderRadius: 10,
  },
  cardtxt: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  productsScroll:{
    maxWidth: '100%',
    padding: 10,
    alignContent:'center'

  },
  products:{
    width: 150,
    height: 200,
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#d1d2e0'
  },
  productimg:{
    width: 120,
    height: 120,
    margin: 5,
    alignItems: 'center',
  }
});
