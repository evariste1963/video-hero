import { error } from '@sveltejs/kit';

const videos = import.meta.glob('$lib/hero/images/*.mp4');

// @ts-ignore
/**
 * @type {any[]}
 */
let vidArray = [];

// @ts-ignore
export function load() {
	if (true) {
		for (const path in videos) {
			vidArray.push(path);
		}

		let video = vidArray[Math.floor(Math.random() * vidArray.length)];

		return {
			// @ts-ignore
			video
		};
	}

	throw error(404, 'Not found');
}
