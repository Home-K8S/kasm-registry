/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Boby Regstry',
    description: 'My list of kasm workspaces',
    icon: 'https://home-k8s.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://home-k8s.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Home-K8S/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
