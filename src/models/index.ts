import {
	ClientConnectionStatus,
	ClientElevation,
	ConnectFourColor,
	Extension,
	FeatureStatus
} from "../values";
import type {
	ICard,
	IServerSettings,
	IUserMetrics,
	IParticipant,
	IClientAuthState
} from "./generics";

export type Ref<T extends IModel> = Partial<T> & string;
export type Deck = ICard[];
export type ISOTimestamp = Date | string;
export type ConnectFourPiece = ConnectFourColor.red | ConnectFourColor.yellow;
export type ConnectFourColumn = ConnectFourPiece[];

export interface IModel {
	_id: string;
	created_at: ISOTimestamp;
	updated_at: ISOTimestamp;
	_v: number;
	toJSON<T>(): T;
}

export interface IChallenge extends IModel {
	server_id: string;
	participants: IParticipant[];
	details: string;
	bets: IBet[];
	is_active: boolean;
	is_betting_active: boolean;
}

export interface IBet extends IModel {
	challenge: Ref<IChallenge>;
	user_id: string;
	participant_id: string;
	amount: number;
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
	is_fool: boolean;
	metrics: IUserMetrics;
	birthday?: ISOTimestamp;
	is_deal_or_no_deal_eligible: boolean;
}

export interface IFeature extends IModel {
	server_id: string;
	user_id: string;
	user: Ref<IUser>;
	title: string;
	body: string;
	status: FeatureStatus;
	up_votes: number;
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

export interface IClient extends IModel {
	email: string;
	username: string;
	password: string;
	elevation: ClientElevation;
	token_version: number;
	auth_state?: IClientAuthState;
	connection_status: ClientConnectionStatus;
}

export interface IConnectFour extends IModel {
	server_id: string;
	red_user_id: string;
	yellow_user_id: string;
	to_move: string;
	board: ConnectFourColumn[];
	wager: number;
	status: string;
	is_accepted: boolean;
	is_complete: boolean;
}

export interface IOpenAiImage extends IModel {
	server_id: string;
	user_id: string;
	prompt: string;
	filename: string;
	permalink: string;
}

export interface IOpenAiCompletion extends IModel {
	server_id: string;
	user_id: string;
	prompt: string;
	output: string;
}

export interface IFunFact extends IModel {
	fact: string;
}

export interface IDealOrNoDeal extends IModel {
	server_id: string;
	user_id: string;
	cases: IDealOrNoDealCase[];
	selected_case: number;
	last_opened_case: number;
	to_open: number;
	offer: number;
	is_complete: boolean;
}

export interface IDealOrNoDealCase {
	value: number;
	is_open: boolean;
}

export interface ISportsBet extends IModel {
	server_id: string;
	user_id: string;
	sport_key: string;
	game_id: string;
	commence_time: string;
	team: string;
	bet_amount: number;
	odds: number;
	is_complete: boolean;
	is_won: boolean;
}

export interface ISportsBetUpcomingGame {
	id: string;
	sport_key: string;
	sport_title: string;
	commence_time: string;
	home_team: string;
	away_team: string;
	bookmakers: {
		key: string;
		title: string;
		last_update: string;
		markets: {
			key: string;
			last_update: string;
			outcomes: {
				name: string;
				price: number;
			}[];
		}[];
	}[];
}

export interface ISportsBetGameResult {
	id: string;
	sport_key: string;
	sport_title: string;
	commence_time: string;
	completed: boolean;
	home_team: string;
	away_team: string;
	scores: {
		name: string;
		score: string;
	}[];
	last_update: string;
}
