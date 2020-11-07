const ACCESS_TOKEN = process.env.API_TOKEN;

const region = 'eu';
const baseUrl = `https://${region}.api.blizzard.com`;

const realmSlug = 'kazzak';
const nameSlug = 'split-iq';

export const fetchGuildRoster = async () => {
  const url = `${baseUrl}/data/wow/guild/${realmSlug}/${nameSlug}/roster?namespace=profile-eu&locale=en_US&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();

  return json.members;
}

export const fetchPlayableClasses = async () => {
  const url = `${baseUrl}/data/wow/playable-class/index?namespace=static-eu&locale=en_US&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();

  return json.classes;
}
