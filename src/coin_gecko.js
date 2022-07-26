// - - - coingecko initiation and import - - -
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const gecko = CoinGeckoClient; // using "gecko" for less typing

// - - - make api call to coin gecko - - -
const gecko_api = async() => {
	const status_label = "Coin Gecko Status";
	console.group(status_label);
	console.table(await gecko.ping());
	console.groupEnd();

	const btc = await gecko.coins.fetch("bitcoin");
	const eth = await gecko.coins.fetch("ethereum");
	// console.info(btc.data.id);
	// console.info(btc.data.tickers[0]);

	// - - - btc data - - -
	console.info(`
		${btc.data.localization.en}\t${btc.data.localization.ja}
		--------------------------------------------------------
		homepage: ${btc.data.links.homepage[0]}
		reddit: ${btc.data.links.subreddit_url}
		market cap rank: ${btc.data.market_cap_rank}
		gh links: ${btc.data.links.repos_url.github[0]},${btc.data.links.repos_url.github[1]}
		developer score: ${btc.data.developer_score}
		community score: ${btc.data.community_score}
		liquidity score: ${btc.data.liquidity_score}
		public interest score: ${btc.data.public_interest_score}
		--------------------------------------------------------
		current price(usd): ${btc.data.market_data.current_price.usd}
		current price(eth): ${btc.data.market_data.current_price.eth}
		current price(jpy): ${btc.data.market_data.current_price.jpy}
		--------------------------------------------------------
		market cap(usd): ${btc.data.market_data.market_cap.usd}
		market cap(eth): ${btc.data.market_data.market_cap.eth}
		market cap(jpy): ${btc.data.market_data.market_cap.jpy}
		market cap rank: ${btc.data.market_data.market_cap_rank}
		--------------------------------------------------------
		total supply: ${btc.data.market_data.total_supply}
		max supply: ${btc.data.market_data.max_supply}
		ciculating supply: ${btc.data.market_data.circulating_supply}
		--------------------------------------------------------
		description (to 300 characters)
		${btc.data.description.en.slice(0,300)}...
	`);
	// - - - developer data - - -
	console.info('DEVELOPER DATA\n','--------------------------------------------------------');
	console.table(btc.data.developer_data);
	
	// - - - community data - - -
	console.info('COMMUNITY DATA\n','--------------------------------------------------------');
	console.table(btc.data.community_data);
	
	// - - - market data - - -
	// console.info('MARKET DATA 24 HOUR HIGHS\n','--------------------------------------------------------');
	// console.table(btc.data.market_data.high_24h);


	// - - - etheruem - - -
	console.info(`
		${eth.data.localization.en}\t${eth.data.localization.ja}
		--------------------------------------------------------
		homepage: ${eth.data.links.homepage[0]}
		reddit: ${eth.data.links.subreddit_url}
		market cap rank: ${eth.data.market_cap_rank}
		gh links: ${eth.data.links.repos_url.github[0]},${eth.data.links.repos_url.github[1]}
		developer score: ${eth.data.developer_score}
		community score: ${eth.data.community_score}
		liquidity score: ${eth.data.liquidity_score}
		public interest score: ${eth.data.public_interest_score}
		--------------------------------------------------------
		current price(usd): ${eth.data.market_data.current_price.usd}
		current price(btc): ${eth.data.market_data.current_price.btc}
		current price(jpy): ${eth.data.market_data.current_price.jpy}
		--------------------------------------------------------
		market cap(usd): ${eth.data.market_data.market_cap.usd}
		market cap(btc): ${eth.data.market_data.market_cap.btc}
		market cap(jpy): ${eth.data.market_data.market_cap.jpy}
		market cap rank: ${eth.data.market_data.market_cap_rank}
		--------------------------------------------------------
		total supply: ${eth.data.market_data.total_supply}
		ciculating supply: ${eth.data.market_data.circulating_supply}
		--------------------------------------------------------
		description (to 300 characters)
		${eth.data.description.en.slice(0,300)}...
	`);
	// - - - developer data - - -
	console.info('DEVELOPER DATA\n','--------------------------------------------------------');
	console.table(eth.data.developer_data);
	
	// - - - community data - - -
	console.info('COMMUNITY DATA\n','--------------------------------------------------------');
	console.table(eth.data.community_data);
	
	// - - - market data - - -
	// console.info('MARKET DATA 24 HOUR HIGHS\n','--------------------------------------------------------');
	// console.table(eth.data.market_data.high_24h);
};

module.exports = { gecko_api }