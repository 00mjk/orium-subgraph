import { BigInt } from "@graphprotocol/graph-ts";
import { Nft, Rental } from "../../generated/schema";

export function generateNftId(type: string, tokenId: BigInt): string {
  return type + "-" + tokenId.toString();
}

export function loadNft(type: string, tokenId: BigInt): Nft {
  const nftId = generateNftId(type, tokenId);
  const nft = Nft.load(nftId);
  if (!nft) {
    throw new Error("[loadNft] NFT not found: " + nftId);
  }

  return nft;
}

export function loadRental(rentalId: string): Rental {
  const rental = Rental.load(rentalId);
  if (!rental) {
    throw new Error("[loadRental] Rental not found: " + rentalId);
  }

  return rental;
}
