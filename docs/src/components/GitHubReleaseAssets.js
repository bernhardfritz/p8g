import React, { useEffect, useState } from 'react';
import MyDocCardList from './MyDocCardList';

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function GitHubReleaseAssets(props) {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    fetch(
      props.tag
        ? `https://api.github.com/repos/${props.owner}/${props.repo}/releases/tags/${props.tag}`
        : `https://api.github.com/repos/${props.owner}/${props.repo}/releases/latest`,
    )
      .then((res) => res.json())
      .then((data) => {
        setRelease(data);
      });
  }, []);

  return release && release.assets && release.assets.length > 0 ? (
    <MyDocCardList
      items={release.assets.map((asset) => ({
        type: 'layout',
        href: asset.browser_download_url,
        icon: '📦',
        title: asset.name,
        description: `${release.tag_name} | ${formatBytes(asset.size)}`,
      }))}
    />
  ) : (
    <MyDocCardList
      items={[
        {
          type: 'layout',
          href: `https://github.com/${props.owner}/${props.repo}/releases`,
          icon: '🔗',
          title: 'GitHub',
          description: 'Releases',
        },
      ]}
    />
  );
}
