import { CardSuit } from "../values";

export interface IParticipant {
	user_id: string;
	is_mayor: boolean;
}

export interface ICard {
	suit: CardSuit;
	value: number;
}

export interface IHandCount {
	softCount: number;
	hardCount: number;
	aceCount: number;
}

export interface IServerSettings {
	lottery_cost: number;
	base_lottery_jackpot: number;
	allowance_rate: number;
	birthday_bucks: number;
	tax_rate: number;
	feature_rate: number;
	challenge_bet_max: number;
}

export interface IEngagementMetrics {
	posts: number;
	reactions_used: number;
	reactions_received: number;
	average_reactions_per_post: number;
	mentions: number;
}

export interface IGamblingMetrics {
	roulette: {
		spins: number;
		red_spins: number;
		black_spins: number;
		green_spins: number;
		wins: number;
		losses: number;
		overall_winnings: number;
		overall_losings: number;
	};
	blackjack: {
		games: number;
		wins: number;
		losses: number;
		double_downs: number;
		overall_winnings: number;
		overall_losings: number;
		last_hand?: {
			won: boolean;
			hand: ICard[];
		};
	};
	challenges: {
		bets: number;
		wins: number;
		losses: number;
		overall_winnings: number;
		overall_losings: number;
	};
	connect_four: {
		games: number;
		wins: number;
		losses: number;
		draws: number;
		overall_winnings: number;
		overall_losings: number;
	};
}

export interface ILotteryMetrics {
	overall_winnings: number;
	tickets_purchased: number;
	wins: number;
}

export interface IUserMetrics {
	engagement: IEngagementMetrics;
	gambling: IGamblingMetrics;
	lottery: ILotteryMetrics;
}

export interface IEmbed {
	title: string;
	description?: string;
	color: number;
	image: {
		url: string;
	};
	fields: {
		name: string;
		value: string;
	}[];
}

export interface IClientAuthState {
	user_id?: string;
	username?: string;
	discriminator?: string;
	avatar?: string;
	access_token?: string;
	refresh_token?: string;
	registered_servers?: string[];
}
