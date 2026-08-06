import { ImageResponse } from 'next/og';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const title = props?.title || process.env.SITE_NAME || 'Riwaaz Indirapuram';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
            width: 120,
            borderRadius: 9999,
            border: '2px solid #c4a574',
            color: '#c4a574',
            fontSize: 64,
            fontWeight: 700
          }}
        >
          R
        </div>
        <p
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 700,
            color: 'white'
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
