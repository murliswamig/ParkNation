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
import style from './style';
import InvoiceStyle from '../Invoice/style';
import Loader from "../../components/loader";


const InvoiceDeatils = (props) => {

    const [data, setInvoiceData] = useState({});

    useEffect(() => {
        (async () => {
            if (props.route.params) {
                console.log("props", props.route.params);
                setInvoiceData(props.route.params)
            }
        })();
    }, []);

    const {width} = useWindowDimensions();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const [userId, setUserId] = useState(false);
    const [price, setPrice] = useState(300);
    const [invoiceDate, setInvoiceDate] = useState('20/06/2022');


    const InvoiceItem = ({title, value}) => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <Text style={{fontSize: 15, color: 'grey'}}>{title}</Text>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>{value}</Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={style.bg}>
            <StatusBar backgroundColor={'rgba(255,0,0,0.1)'} barStyle="dark-content" hidden={false}/>
            <Loader loading={loading}/>
            <View style={[style.homeHeader, {justifyContent: 'flex-start',backgroundColor: 'rgba(255,0,0,0.1)'}]}>
                <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                    <Image
                        source={ImageUrlConstants.back_icon}
                    />
                </TouchableOpacity>
                <Text style={style.InvoiceTitle}>Invoice details</Text>
            </View>
            <View style={{
                backgroundColor: 'rgba(255,0,0,0.1)',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                paddingTop: 15,
                paddingBottom: 15
            }}>


                <View style={InvoiceStyle.row}>
                    <View style={InvoiceStyle.colPad}>
                        <Text style={InvoiceStyle.cashingText}>{'Date of Service'}</Text>
                        <Text style={InvoiceStyle.dateText}>{data && data.invoice_title}</Text>
                    </View>
                </View>
                <View style={InvoiceStyle.colPad}>
                    <Text style={[InvoiceStyle.priceText]}>${data && data.total}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{padding: 10}}>
                    <InvoiceItem title="Site" value={data && data.site_name}/>
                    <InvoiceItem title="Invoice Type" value={data && data.invoice_type}/>
                    <InvoiceItem title="Due Date" value={data && data.due_date}/>
                    <View style={{backgroundColor: 'grey', height: 1, margin: 10}}/>

                    <InvoiceItem title="Total WO Tax" value={data && '$'+data.totalwotax}/>
                    <InvoiceItem title="Tax" value={data && '$'+data.tax}/>
                    <InvoiceItem title="Discount" value={data && '$'+data.discount_amt}/>
                    <InvoiceItem title="service" value={data && '$'+data.service_amt}/>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default InvoiceDeatils;
