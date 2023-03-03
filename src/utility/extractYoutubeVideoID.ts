export default function extractYoutubeVideoID(link: string) {
  try {
    return link.replace(link.match(/^.*=/)![0], '');
  } catch (error) {
    console.log(error);
    return link;
  }
}
