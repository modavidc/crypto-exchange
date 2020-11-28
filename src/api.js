const url = "https://api.coincap.io/v2";

async function getAssets(limit = 20) {
  const res = await fetch(`${url}/assets?limit=${limit}`);
  const res_1 = await res.json();
  return res_1.data;
}

async function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const res_1 = await res.json();
  return res_1.data;
}

async function getMarkets(coin) {
  const res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  const res_1 = await res.json();
  return res_1.data;
}

async function getExchange(id) {
  const res = await fetch(`${url}/exchanges/${id}`);
  const res_1 = await res.json();
  return res_1.data;
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
