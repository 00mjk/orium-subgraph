import { BigInt } from "@graphprotocol/graph-ts";
import { ALPHA_TOKEN_ADDRESS, FOMO_TOKEN_ADDRESS, FUD_TOKEN_ADDRESS, KEK_TOKEN_ADDRESS } from "./addresses";

export const Aavegotchi = "Aavegotchi";
export const AAVEGOTCHI = "AAVEGOTCHI";
export const AAVEGOTCHI_LAND = "AAVEGOTCHI_LAND";
export const CLOSED_PORTAL = "CLOSED_PORTAL";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_ETHER = BigInt.fromString("1000000000000000000");
export const NONE = "NONE";
export const COMETHSPACESHIP = "COMETHSPACESHIP";
export const MAX_UINT256 = BigInt.fromString("115792089237316195423570985008687907853269984665640564039457584007913129639935");

export const ALCHEMICA_TYPE_TO_ADDRESS = [FUD_TOKEN_ADDRESS, FOMO_TOKEN_ADDRESS, ALPHA_TOKEN_ADDRESS, KEK_TOKEN_ADDRESS];

export const REWARDS_DISTRIBUTED_EVENT = "Player Rewards";
export const ALCHEMICA_CLAIMED_EVENT = "Farming";
export const CHANNEL_ALCHEMICA_EVENT = "Channeling";
export const TRANSFER_TOKENS_TO_GOTCHI_EVENT = "Vortex";