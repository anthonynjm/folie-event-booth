import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_SRC = 'https://www.instagram.com/embed.js';

function loadInstagramScript() {
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
  const s = document.createElement('script');
  s.src = SCRIPT_SRC;
  s.async = true;
  document.body.appendChild(s);
}

interface Props {
  urls: string[];
}

const InstagramEmbed = ({ urls }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadInstagramScript();
    const process = () => window.instgrm?.Embeds.process();
    const t = window.setTimeout(process, 500);
    process();
    return () => window.clearTimeout(t);
  }, [urls]);

  return (
    <div
      ref={ref}
      className="grid gap-6 [&_.instagram-media]:!mx-auto [&_.instagram-media]:!w-full md:grid-cols-2 lg:grid-cols-3"
    >
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#000',
            border: 0,
            margin: 0,
            maxWidth: '540px',
            minWidth: '280px',
            width: '100%',
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </blockquote>
      ))}
    </div>
  );
};

export default InstagramEmbed;
