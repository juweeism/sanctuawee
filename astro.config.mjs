import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { remarkModifiedTime } from './src/utils/time.mjs';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [react(), tailwind()],
    markdown: {
        remarkPlugins: [remarkModifiedTime],
    },
});
