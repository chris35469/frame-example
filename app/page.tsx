import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL, API_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: '👁️',
    },
    {
      action: 'link',
      label: 'w3bbie.xyz',
      target: 'https://w3bbie.xyz',
    }
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/w3bbie1.jpg`,
    aspectRatio: '1:1',
  },
  postUrl: `${API_URL}/api/frame`
});

export const metadata: Metadata = {
  title: 'w3bbie.xyz',
  description: 'W3bbie Was Here',
  openGraph: {
    title: 'w3bbie.xyz',
    description: 'W3bbie Was Here',
    images: [`${NEXT_PUBLIC_URL}/w3bbie1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>w3bbie.xyz</h1>
    </>
  );
}
