const url  = process.env.LIST_URL  || "https://www.list.am/";
const user = process.env.LIST_USER || null;
const pass = process.env.LIST_PASS || null;

module.exports = { url, user, pass, };
