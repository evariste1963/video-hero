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
