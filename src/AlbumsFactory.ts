import { BigInt } from "@graphprotocol/graph-ts"
import {
  AlbumsFactory,
  AlbumClaimed,
  AlbumCreated,
  AlbumsProtocolUpgraded,
  OwnershipTransferred
} from "../generated/AlbumsFactory/AlbumsFactory"
import { UserAlbumE, AlbumCollectionE } from "../generated/schema"
import { UserAlbum, AlbumCollection } from '../generated/templates';
import { getUser } from './helpers';
// event AlbumsProtocolUpgraded(address newImplementation);
// event AlbumClaimed(address who, address albumAddress);

export function handleAlbumClaimed(event: AlbumClaimed): void {
  let creatorString = event.params.who.toHexString()// check if exists
  let user = getUser(creatorString);
  let albumAddress = event.params.albumAddress.toHexString();
  let userAlbumId = event.params.userAlbumAddress.toHexString();
  let userAlbum = new UserAlbumE(userAlbumId);
  userAlbum.owner = creatorString;
  userAlbum.count = BigInt.fromI32(0);
  userAlbum.collection = albumAddress;
  userAlbum.save();
  UserAlbum.create(event.params.albumAddress)
  let album = AlbumCollectionE.load(albumAddress);
  album.albumsRequested += BigInt.fromI32(1);
  album.save();
}

// event AlbumCreated(address creator,string urlIpfs,address albumAddress,uint256 albumId);
export function handleAlbumCreated(event: AlbumCreated): void {
  let addressCreated = event.params.albumAddress.toHexString()
  let creatorString = event.params.creator.toHexString()// check if exists
  let user = getUser(creatorString);
  let albumCollection = new AlbumCollectionE(addressCreated);
  albumCollection.urlIpfs = event.params.urlIpfs
  albumCollection.albumId = event.params.albumId
  albumCollection.creator = user.id;
  albumCollection.price = event.params.price
  albumCollection.envelopesSelled = BigInt.fromI32(0)
  albumCollection.albumsRequested = BigInt.fromI32(0)
  albumCollection.save();
  AlbumCollection.create(event.params.albumAddress);
}

export function handleAlbumsProtocolUpgraded(
  event: AlbumsProtocolUpgraded
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
