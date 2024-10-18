// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import vercel from '@astrojs/vercel/static'

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://wjd3.com',
    integrations: [tailwind(), sitemap(), icon(), compress()],
    output: 'static',
    adapter: vercel(),
    image: {
        domains: ['images.prismic.io'],
        remotePatterns: [{ protocol: 'https' }]
    }
})