// Builds a correct URL for files in the /public folder.
// Works on localhost ("/") and on GitHub Pages ("/onicc-website/"), and handles spaces in file names.
export const asset = (path) => `${import.meta.env.BASE_URL}${encodeURI(path.replace(/^\//, ''))}`
