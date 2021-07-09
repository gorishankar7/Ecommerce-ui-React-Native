import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }){
    return(
       <SafeAreaView>
        <View style={styles.header}>
        <View style={styles.circlesecond}>
          <View style={styles.circle}>
            <Image
              style={styles.circleimg}
              source={require('../assests/img/faceicon.png')}></Image>
          </View>
          </View>
        </View>
      
        <View style={{alignItems: 'center', justifyContent:'center', marginTop: 220, backgroundColor: '#FFF', borderRadius: 10, margin: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20,  fontFamily: 'Sarpanch-Bold',}}>Rubby Goyal</Text>

            <Text style={{fontWeight: 'bold', fontSize: 20,  flexWrap:'wrap-reverse', margin: 25, alignContent: 'center'}}>House N0. 232/2, Indra Giri Asshram Road, Sujangarh, Rajasthan (India)</Text>



        </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 130,
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
      },

    circle: {
        width: 150,
        height: 150,
        flex: 0,
        margin: 10,
        padding: 2,
        borderRadius: 150 / 2,
        backgroundColor: '#eebbce',
        alignItems: 'center',
        justifyContent: 'center',
      },
      circlesecond:{
        width: 180,
        height: 180,
        flex: 0,
        margin: 10,
        padding: 2,
        borderRadius: 150 / 2,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      circleimg: {
        width: 100,
        height: 100,
      },
})
