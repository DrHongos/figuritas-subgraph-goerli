import { BigInt } from "@graphprotocol/graph-ts"
import {
  FigurineSticked,
  FigurineUnsticked,
  OwnershipTransferred
} from "../generated/templates/UserAlbum/UserAlbum"
import { UserAlbumE } from "../generated/schema"
import { getUser } from './helpers';
export function handleFigurineSticked(event: FigurineSticked): void {
  let userAlbumAddress = event.address.toHexString();
  let album = UserAlbumE.load(userAlbumAddress);
  album.count += BigInt.fromI32(1);
  album.save();
}

export function handleFigurineUnsticked(event: FigurineUnsticked): void {
  let userAlbumAddress = event.address.toHexString();
  let album = UserAlbumE.load(userAlbumAddress);
  album.count -= BigInt.fromI32(1);
  album.save();
}
export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let userAlbumAddress = event.address.toHexString();
  let newOwner = event.params.newOwner.toHexString();
  let user = getUser(newOwner);
  let album = UserAlbumE.load(userAlbumAddress);
  album.owner = user.id;
  album.save();

}

// type UserAlbumE @entity {
//   id: ID!
//   owner: UserE!
//   collection: AlbumCollectionE!;
//   count: BigInt!
// }
