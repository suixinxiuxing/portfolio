import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
