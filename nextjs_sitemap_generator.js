const sitemap =  require("nextjs-sitemap-generator");

const fs =  require("fs");



const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();



sitemap({
  baseUrl: "https://hikarimind.xyz",
  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
  pagesDirectory: __dirname + "/out",
  targetDirectory: "out/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["assets"], // Exclude everything that isn't static page
});
