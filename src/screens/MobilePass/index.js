import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image, RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import {ImageUrlConstants} from '../../assets/url/imageUrl';
import styles from '../Invoice/style';
import {ERROR, LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
import {connect} from "react-redux";
import Footer from "../../components/footer";
import {useIsFocused} from "@react-navigation/native";


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


    useEffect(()=>{
        const userDetailsPath = props.HomeRes.userDetailsR;

    },[props.HomeRes]);


    const handleTab=(tabValue)=>{
        if(tabValue==="home"){
            props.navigation.navigate('Home');
        }else if(tabValue==="Mobile"){
            props.navigation.navigate('Mobile')
        }else if(tabValue==="Invoice"){
            props.navigation.navigate('Invoice')
        }else if(tabValue==="More"){
            props.navigation.navigate('More')
        }
        console.log("tabValue",tabValue)
    }

    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" hidden={false}/>
            <Loader loading={loading}/>
            <View style={[styles.homeHeader,{justifyContent: 'flex-start'}]}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                    <Image
                        source={ImageUrlConstants.back_icon}
                    />
                </TouchableOpacity>
                <Text style={styles.InvoiceTitle}>Mobile Pass</Text>
            </View>
            <View style={{flex: 1,justifyContent: 'flex-end'}}>
                <Footer name="Mobile" tabClick={(value)=>handleTab(value)}/>
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
