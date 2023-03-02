//this creates an array of video files on page load and then randomly selects which one to use.

export const prerender = true;
const videos = import.meta.glob('$lib/hero/videos/*/*.mp4');

/**
 * @type {any[]}
 */
let vidArray = [];

export async function load() {
	for (const path in videos) {
		vidArray.push(path);
	}

	let video = await vidArray[Math.floor(Math.random() * vidArray.length)];

	return {
		video
	};
}
