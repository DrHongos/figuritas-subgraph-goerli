import { BigInt } from "@graphprotocol/graph-ts"
import {
  OfferListed,
  TradeTaken,
  TradeCancelled
} from "../generated/TradeCourt/TradeCourt"
// import { ExampleEntity } from "../generated/schema"

// lo hago despues.. por ahora me complica

// event OfferListed(
//   address creator,
//   address albumO,
//   uint256 id_offered,
//   address albumR,
//   uint256 id_required
//   );
// event TradeTaken(address taker, uint256 offer);
// event TradeCancelled(uint256 id);


export function handleOfferListed(event: OfferListed): void {
  // (address,address,uint256,address,uint256)
}

export function handleTradeTaken(event: TradeTaken): void {
  // (address, uint256)
}

export function handleTradeCancelled(event: TradeCancelled): void {
  // (uint256)
}
