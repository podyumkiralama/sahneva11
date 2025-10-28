export default function robots() {
  const host = "https://www.sahneva.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: [`${host}/sitemap.xml`],
  };
}