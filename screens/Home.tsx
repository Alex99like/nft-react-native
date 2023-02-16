import {FlatList, SafeAreaView, Text, View} from "react-native";
import { COLORS, NFTData } from '../constants'
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components'
import {useState} from "react";

const Home = () => {
  const [nftCard, setNftCard] = useState(NFTData)

  const handleSearch = (value: string) => {
    if (!value.length) return setNftCard(NFTData)

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )

    if (filteredData.length) {
      setNftCard(filteredData)
    } else {
      setNftCard((NFTData))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftCard}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home