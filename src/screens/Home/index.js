import React, {useEffect, useState} from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import {ImageUrlConstants} from '../../assets/url/imageUrl';
import styles from './style';

import invoiceStyle from '../Invoice/style';
import {ERROR, LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
import {connect} from "react-redux";
import Footer from "../../components/footer";
import {useIsFocused} from "@react-navigation/native";

const balance=300;


const Home = (props) => {

    const {width} = useWindowDimensions();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const [userId, setUserId] = useState(false);

    const isFocused = useIsFocused();
    useEffect(() => {
        (async () => {
            let user = await AsyncStorage.getItem('user');
            let myUser = JSON.parse(user);
            setUserId(myUser.id);
        })();
    }, []);


    useEffect(() => {
        const userDetailsPath = props.HomeRes.userDetailsR;

        if (userDetailsPath.status === LOADING) {
            setLoading(true);
        } else if (userDetailsPath.status === SUCCESS) {
            console.log("sss", userDetailsPath)
            setUserData(userDetailsPath.value.data.data);
            setLoading(false);
        } else if (userDetailsPath.status === ERROR) {
            console.log("error", userDetailsPath)
            setLoading(false);
        }
    }, [props.HomeRes]);


    const onRefresh = () => {
        setRefreshing(true);
    };

    const RenderItem = ({title,price}) => {
        return (<TouchableOpacity onPress={() => {
            console.log("")
        }} style={{}}>
            <View style={[invoiceStyle.invoiceBox, invoiceStyle.sha]}>
                <View style={{flexDirection: 'row',flex:1,alignItems: 'center', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <View style={[invoiceStyle.imageBack, {opacity: 0.2}]}>
                            <Image
                                source={ImageUrlConstants.invoice}
                                style={{tintColor: 'blue'}}
                            />
                        </View>
                        <View style={[invoiceStyle.colPad,{marginLeft:10}]}>
                            <Text style={invoiceStyle.HomedateText}>{title}</Text>
                        </View>
                    </View>
                    <View style={[invoiceStyle.colPad,{backgroundColor:'white'}]}>
                        <Text style={[invoiceStyle.priceText,{color:'#000'}]}>${price.toFixed(2)}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>)
    };


    const handleTab = (tabValue) => {
        if (tabValue === "home") {
            props.navigation.navigate('Home');
        } else if (tabValue === "Mobile") {
            props.navigation.navigate('Mobile')
        } else if (tabValue === "Invoice") {
            props.navigation.navigate('Invoice')
        } else if (tabValue === "More") {
            props.navigation.navigate('More')
        }
        console.log("tabValue", tabValue)
    }

    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar backgroundColor={'rgba(255,0,0,0.1)'} barStyle="dark-content" hidden={false}/>
            <Loader loading={loading}/>

            <View style={[styles.homeHeader,{backgroundColor: 'rgba(255,0,0,0.1)'}]}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.headerLeft}>
                        {userData && userData.image ? <Image
                                source={{uri: userData && userData.image && userData.image}}
                                style={styles.profileImage}
                            /> :
                            <Image
                                source={ImageUrlConstants.dummyProfile1}
                                style={styles.profileImage}
                            />
                        }

                        <View style={styles.profileDes}>
                            <Text style={[styles.profileTitle,{color: 'grey'}]}>Welcome</Text>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.profileTitle}>{"Adom"}</Text>
                        </View>
                    </View>
                        <View/>
                    <View style={styles.headerRight}>
                        {/*<Image*/}
                        {/*    source={ImageUrlConstants.bell}*/}
                        {/*    style={{tintColor:'red'}}*/}
                        {/*/>*/}
                    </View>
                    </View>

                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'rgba(255,0,0,0.1)',
                borderBottomEndRadius: 40,
                borderBottomStartRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 30,
                paddingBottom: 70,}}>
                <View style={{ justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Text style={{margin:10,color:'#000',fontSize:16}}>Overdue balance</Text>
                    <Text style={{margin:10,color:'red',fontSize:22,fontWeight:'bold'}}>${balance.toFixed(2)}</Text>
                </View>
                <View style={styles.imgTop}>
                    <View style={[styles.circle,styles.elevation]}>
                        <Image
                            source={ImageUrlConstants.onlinePayment}
                            style={styles.payImage}
                        />
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{padding: 10}}>
                    <Text style={{margin:10}}>SUMMARY</Text>
                    <RenderItem title="Total Invoices" price={200}/>
                    <RenderItem title="Paid Amount" price={2400}/>
                </View>

            </ScrollView>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Footer name="home" tabClick={(value) => handleTab(value)}/>
            </View>
        </SafeAreaView>
    );
};
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        HomeRes: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        defaultRequest: () => {

        },
        userDetailsRequest: (user_id) => {

        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
