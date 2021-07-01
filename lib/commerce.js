import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(process.env.COMMERCE_PUBLIC_KEY);

export default client;
