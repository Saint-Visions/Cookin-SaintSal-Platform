import BuilderDevTools from '@builder.io/dev-tools/next'
import path from 'path'

const nextConfig = BuilderDevTools()({
  webpack(config) {
    // Set up path aliases
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
  // Other Next.js config options can go here
})

export default nextConfig
