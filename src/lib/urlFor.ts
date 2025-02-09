import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/lib/client'; // Path ko ensure kar lein

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
