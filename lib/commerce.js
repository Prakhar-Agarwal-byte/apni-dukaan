import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(process.env.NEXT_PUBLIC_COMMERCE_PUBLIC_KEY);

export default client;
