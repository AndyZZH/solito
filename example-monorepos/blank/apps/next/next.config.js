/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(__dirname, "../../node_modules/@expo/vector-icons"),
    })
    return config
  }
}

const { withExpo } = require('@expo/next-adapter')
const withFonts = require("next-fonts");
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app',
])

module.exports = withPlugins(
  [withTM, 
  [withFonts, { projectRoot: __dirname }],
  [withExpo, { projectRoot: __dirname }]],
  nextConfig
)
