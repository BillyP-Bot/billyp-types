import { Extension } from "../values";
import type { ICard, IServerSettings, IUserMetrics } from "./generics";

export type Ref<T extends IModel> = Partial<T> & string;
export type Deck = ICard[];
export type ISOTimestamp = Date | string;

export interface IModel {
	_id: string;
	created_at: ISOTimestamp;
	updated_at: ISOTimestamp;
	toJSON<T>(): T;
	// _v: number; version key virtual exists on document
}

export interface IBlackJack extends IModel {
	server_id: string;
	wager: number;
	payout: number;
	double_down: boolean;
	user: Ref<IUser>;
	deck: Deck;
	turn: number;
	status: string;
	won: boolean;
	player_hand: ICard[];
	dealer_hand: ICard[];
	is_complete: boolean;
}

export interface IServer extends IModel {
	server_id: string;
	name: string;
	icon_hash: string;
	taxes_collected: boolean;
	settings: IServerSettings;
}

export interface IUser extends IModel {
	billy_bucks: number;
	server_id: string;
	user_id: string;
	username: string;
	discriminator: string;
	avatar_hash?: string;
	allowance_available: boolean;
	has_lottery_ticket: boolean;
	is_admin: boolean;
	is_mayor: boolean;
	metrics: IUserMetrics;
	birthday?: ISOTimestamp;
}

export interface IAnnouncement extends IModel {
	server_id: string;
	user: Ref<IUser>;
	text: string;
	channel_name: string;
}

export interface IWebhook extends IModel {
	server_id: string;
	server: Ref<IServer>;
	channel_name: string;
	webhook_id: string;
	webhook_token: string;
	avatar_url: string;
	username: string;
	notes?: string;
}

export interface IMediaFile extends IModel {
	file_name: string;
	extension: Extension;
	key: string;
	notes?: string;
}

export interface IStock extends IModel {
	server_id: string;
	user_id: string;
	symbol: string;
	price: number;
	currency: string;
	amount: number;
	is_deleted: boolean;
}
