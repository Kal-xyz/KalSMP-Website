import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			favicon: '/favicon.ico',
			head: [
			  {
				tag: 'link',
				attrs: {
				  rel: 'icon',
				  href: 'public/favicon.ico',
				  sizes: '32x32',
				},
			  },
			],
			defaultLocale: 'root',
			locales: {
				root: {
				  label: 'English',
				  lang: 'en',
				},
				mk: {
					label: 'Macedonian',
					lang: 'mk',
				},
			},
			title: 'KalSMP Guide & Wiki',
			logo: {
				src: './src/assets/kalsmp.jpg',
			},
			social: {
				discord: 'https://kalxyz.com/discord',
				github: 'https://github.com/kalsmp',
			},
			customCss: [
				'./src/style.css',
			  ],
			sidebar: [
				{
					label: 'Installation & Setup',
					items: [
						{ label: 'Prerequirements', slug: 'en/installation/prerequirements' },
						{ label: 'Java installation', slug: 'en/installation/java'},
						{ label: 'Installing a launcher', slug: 'en/installation/launcher'},
						{ label: 'Installing the modpack', slug: 'en/installation/modpack'},
						{ label: 'Linking & Whitelist', slug: 'en/installation/link'},
					],
				},
				{
					label: 'Other Options',
					items: [
						{ label: 'Updating the Modpack', slug: 'en/other/updating'},
						{ label: 'Troubleshooting Problems', slug: 'en/other/troubleshoot'},
						{ label: 'Installing Additional Files', slug: 'en/other/addons'},
					]
				},
				{
					label: 'Wiki',
					items: [
						{ label: 'Wiki Homepage', slug: 'en/wiki/wiki-homepage'},
					]
				},
			],
		}),
	],
});
