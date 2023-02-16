import {View, Text, SafeAreaView, FlatList, Image, StatusBar} from "react-native";
import {FC} from "react";
import {StackNavigationEventMap, StackNavigationOptions, StackScreenProps} from "@react-navigation/stack";
import {DetailsBid, DetailsDesc, FocusedStatusBar, TypeCard} from "../components";
import {ParamListBase, RouteConfig, StackNavigationState} from "@react-navigation/native";
import {CircleButton, RectButton} from "../components/Button";
import {assets, COLORS, FONTS, SHADOWS, SIZES} from "../constants";
import {SubInfo} from "../components/SubInfo";

// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };
//
// type DetailsProps = StackScreenProps<RootStackParamList, 'Profile', 'Details'>;
type ScreenProps = { data: TypeCard }

const DetailsHeader: FC<any> = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode={'cover'}
      style={{ width: '100%', height: '100%' }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={20}
      top={StatusBar.currentHeight! + 15}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={20}
      top={StatusBar.currentHeight! + 15}
    />
  </View>
)

const Details: FC<any> = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                }}>
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default Details