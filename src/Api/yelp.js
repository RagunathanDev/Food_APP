import axios from "axios";

const apiKey =
  "P57wzfXLrtZ2603S0qBQgYvoIz4BJDgnxvXLWybOPO3QdrWGOi-JDpFp1HJ9sNDGwma28KtjHGj-WTwaKD8GdyfoQJq7aqYeulCdIW2oeKaKOPgWbFATLYb0sUt4X3Yx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
