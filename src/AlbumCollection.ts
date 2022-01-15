import { BigInt } from "@graphprotocol/graph-ts"
import {
  gainsClaimed,
  EnvelopeOpen,
  FigurinesBought,
} from "../generated/templates/AlbumCollection/AlbumCollection";
import {AlbumCollectionE} from "../generated/schema";

export function handlegainsClaimed(event: gainsClaimed): void {}

export function handleEnvelopeOpen(event: EnvelopeOpen): void {}

export function handleFigurinesBought(event: FigurinesBought): void {
  let albumAddress = event.address.toHexString();
  let album = AlbumCollectionE.load(albumAddress);
  album.envelopesSelled += event.params.amount;
  album.save();
}

// event gainsClaimed(uint256 amount);
// event EnvelopeOpen(address owner, uint256[] ids, uint256[] amounts);
// event FigurinesBought(address to, uint256 amount);


// type AlbumCollectionE @entity {
//   id: ID!
//   urlIpfs: String!
//   albumId: BigInt!
//   creator: UserE!
//   price: BigInt!
//   envelopesSelled: BigInt!
//   albumsRequested: BigInt!
// }
