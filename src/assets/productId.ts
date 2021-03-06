import { getProcessedMetaTags } from "../services/metaTagProcess";

const data = {
  description: {
    title: "Detail Produk Kami",
    description: "Dapatkan Detail Produk Kami",
  },
  hrefLang: {
    "id-id": `${process.env.ORIGIN_URL}/product`,
  },
  robots: "index,follow",
};
export function fetchProcessedMetaTags() {
  return getProcessedMetaTags(data);
}

export default fetchProcessedMetaTags;
