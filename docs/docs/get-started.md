import GitHubReleaseAssets from '@site/src/components/GitHubReleaseAssets';
import MyDocCardList from '@site/src/components/MyDocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Get started

## Download p8g

<GitHubReleaseAssets owner="bernhardfritz" repo="p8g"/>

## Choose a programming language

<MyDocCardList items={useCurrentSidebarCategory().items.map((item) => ({...item, type: 'image', icon: <img src={useBaseUrl(`/img${item.href.substring(item.href.lastIndexOf('/'))}.svg`)}></img>}))}/>
