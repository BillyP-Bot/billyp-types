/**
 * color codes from https://www.spycolor.com/
 */
export enum ColorCodes {
	green = 58957
}

/**
 roulette color enum
 */
export enum RouletteColor {
	red = "red",
	black = "black",
	green = "green"
}

/**
 card suit enum
 */
export enum CardSuit {
	clubs = "clubs",
	hearts = "hearts",
	spades = "spades",
	diamonds = "diamonds"
}

/**
 file extension enum
 */
export enum Extension {
	mp4 = "mp4",
	mp3 = "mp3",
	jpeg = "jpeg",
	jpg = "jpg",
	png = "png",
	svg = "svg",
	pdf = "pdf",
	ico = "ico"
}

/**
 feature status enum
 */
export enum FeatureStatus {
	rejected = "rejected",
	pending = "pending",
	in_progress = "in_progress",
	completed = "completed"
}

/**
 blackjack reacts enum
 */
export enum BlackjackReacts {
	hit = "🟩",
	stand = "🟨",
	doubleDown = "🟦"
}

/**
 client authorization elevation
 */
export enum ClientElevation {
	user = "user",
	admin = "admin"
}

/**
 client connection status
 */
export enum ClientConnectionStatus {
	connected = "connected",
	disconnected = "disconnected"
}

/**
 connect four color enum
 */
export enum ConnectFourColor {
	red = "🔴",
	yellow = "🟡",
	empty = "⏺️"
}

/**
 connect four reacts enum
 */
export enum ConnectFourReacts {
	one = "1️⃣",
	two = "2️⃣",
	three = "3️⃣",
	four = "4️⃣",
	five = "5️⃣",
	six = "6️⃣",
	seven = "7️⃣"
}

/**
 openai completion model enum
 */
export enum OpenAiCompletionModel {
	davinci = "text-davinci-003",
	curie = "text-curie-001",
	babbage = "text-babbage-001",
	ada = "text-ada-001",
	turbo35 = "gpt-3.5-turbo"
}

/**
 deal or no deal reacts enum
 */
export enum DealOrNoDealReacts {
	deal = "🟢",
	noDeal = "🔴"
}
