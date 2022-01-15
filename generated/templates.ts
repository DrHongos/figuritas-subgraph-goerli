// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class AlbumCollection extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("AlbumCollection", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "AlbumCollection",
      [address.toHex()],
      context
    );
  }
}

export class UserAlbum extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("UserAlbum", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "UserAlbum",
      [address.toHex()],
      context
    );
  }
}
