import React from "react";
import {RefreshControl, ScrollView as ScrollViewRN} from "react-native";
import {vibrateShort} from "../utils/helper";
import {Center, Text, View} from "native-base";

const ScrollView = ({onRefresh, onScrollBottom, more, children, ...props}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <ScrollViewRN
      bounces={false}
      overScrollMode={'never'}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => {
        setRefreshing(true);
        vibrateShort();
        onRefresh && await onRefresh();
        setRefreshing(false);
      }} />}
      onMomentumScrollEnd={async event => {
        if(!more || refreshing || loading){
          return;
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        if(y + height >= contentHeight - 50){
          setLoading(true);
          onScrollBottom && await onScrollBottom();
          setLoading(false)
        }
      }}
      {...props}
    >
      {children}
      <View py={5}><Center>{more ? <Text>加载中...</Text> : <Text>没有更多数据了</Text>}</Center></View>
    </ScrollViewRN>
  );
}

export default ScrollView
