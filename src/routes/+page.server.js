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
	let slugArr = video.split('/');
	let title = slugArr[slugArr.length - 2];

	// an array of section -> todo: needs to be more dynamic based on sections array
	let sections = ['section1', 'section2', 'section3', 'section4'];

	return {
		video,
		title,
		sections
	};
}
