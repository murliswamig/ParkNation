import React, {useEffect, useState} from 'react';
import {
    FlatList,
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
import style from './style';
import {ERROR, LOADING, SUCCESS} from "../../redux/constants/reduxConstant";
import InvoiceA from "../../redux/actions/InvoiceA";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
import {connect} from "react-redux";
import Footer from "../../components/footer";
import {useIsFocused} from "@react-navigation/native";
import {AuthContext} from "../../context/AuthContext";


const Invoice = (props) => {

    const {width} = useWindowDimensions();
    const {logout} = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const [userId, setUserId] = useState(false);
    const [invoiceList, setInvoiceList] = useState([
        // {invoiceDate: "18/06/2022", price: 230},
        // {invoiceDate: "19/06/2022", price: 300},
        // {invoiceDate: "20/06/2022", price: 230},
        // // {invoiceDate: "20/06/2022", price: 2230},
        // // {invoiceDate: "19/06/2022", price: 300},
        // // {invoiceDate: "20/06/2022", price: 230},
        // // {invoiceDate: "20/06/2022", price: 2230},
    ]);

    const isFocused = useIsFocused();
    useEffect(() => {
        (async () => {
            let user = await AsyncStorage.getItem('user');
            let myUser = JSON.parse(user);
            console.log("invoice user",myUser)
            setUserId(myUser);
            props.getInvoice(myUser.user.user_id,myUser.access_token);
        })();
    }, []);




    useEffect(() => {
        const InvoicePath = props.InvoiceRes.InvoiceR;
        console.log("InvoicePath", InvoicePath)
        if (InvoicePath.status === LOADING) {
            setLoading(true);
        } else if (InvoicePath.status === SUCCESS) {
            console.log("sss", InvoicePath.value.data)
            setInvoiceList(InvoicePath.value.data[0]);
            setLoading(false);
        } else if (InvoicePath.status === ERROR) {
            console.log("error", InvoicePath)
            setLoading(false);
            logout();
        }
    }, [props.InvoiceRes]);

    const onRefresh = () => {
        setRefreshing(true);
    };

    const renderItem = ({item}) => (
       <TouchableOpacity onPress={() => props.navigation.navigate('InvoiceDeatils',item)} style={{}}>
            <View style={[style.invoiceBox,style.sha]}>
                <View style={style.row}>
                    <View style={style.colPad}>
                        <Text style={style.cashingText}>{'Date of Service'}</Text>
                        <Text style={style.dateText}>{item && item.invoice_date_of_service}</Text>
                    </View>
                </View>
                <View style={style.colPad}>
                    <Text style={[style.priceText]}>${item && item.total}</Text>
                </View>
            </View>
         </TouchableOpacity>
    );


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
        <SafeAreaView style={style.bg}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" hidden={false}/>
            <Loader loading={loading}/>
            <View style={[style.homeHeader, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                    <Image
                        source={ImageUrlConstants.back_icon}
                    />
                </TouchableOpacity>
                <Text style={style.InvoiceTitle}>Invoices</Text>
            </View>

                <View style={{padding: 10}}>
                    <FlatList data={invoiceList} renderItem={renderItem}/>
                </View>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Footer name="Invoice" tabClick={(value) => handleTab(value)}/>
            </View>

        </SafeAreaView>
    );
};
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        InvoiceRes: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        defaultRequest: () => {

        },
        getInvoice:(userId,token)=>{
            dispatch(InvoiceA(userId,token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
