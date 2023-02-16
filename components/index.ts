import HomeHeader from "./HomeHeader";
import FocusedStatusBar from "./FocusedStatusBar";
import NFTCard from './NFTCard'
import DetailsDesc from "./DetailsDesc";
import DetailsBid from "./DetailsBid";

interface TypeBid {
  id: string
  name: string
  price: number
  image: any
  date: string
}

interface TypeCard {
  id: string
  name: string
  creator: string
  price: number
  description: string
  image: any
  bids: Array<TypeBid>
}

export {
  HomeHeader, NFTCard, FocusedStatusBar, TypeCard, TypeBid, DetailsDesc, DetailsBid
}