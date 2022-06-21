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
import styles from '../Home/style';
import {ERROR, LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
import {connect} from "react-redux";
import Footer from "../../components/footer";
import {useIsFocused} from "@react-navigation/native";


const More = (props) => {

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

        if(userDetailsPath.status===LOADING){
            setLoading(true);
        }else if(userDetailsPath.status===SUCCESS){
            console.log("sss",userDetailsPath)
            setUserData(userDetailsPath.value.data.data);
            setLoading(false);
        }else if(userDetailsPath.status===ERROR){
            console.log("error",userDetailsPath)
            setLoading(false);
        }
    },[props.HomeRes]);



    const onRefresh = () => {
        setRefreshing(true);
    };



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
            <View style={styles.homeHeader}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>

                </TouchableOpacity>
            </View>
            <View style={{flex: 1,justifyContent: 'flex-end'}}>
                <Footer name="More" tabClick={(value)=>handleTab(value)}/>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(More);
