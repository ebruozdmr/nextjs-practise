/** @type {import('next').NextConfig} */
const nextConfig = {
  // Client Side Rendering için config dosyasında environment ortamının tanımlanması gerekir.
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname:
          "/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
      },
    ],
  },
};

export default nextConfig;
