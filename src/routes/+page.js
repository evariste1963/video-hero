const videos = import.meta.glob('$lib/hero/videos/*/*.mp4');

/**
 * @type {any[]}
 */
let vidArray = [];

export function load() {
	for (const path in videos) {
		vidArray.push(path);
	}

	let video = vidArray[Math.floor(Math.random() * vidArray.length)];

	return {
		video
	};
}
