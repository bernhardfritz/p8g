import GitHubReleaseAssets from '@site/src/components/GitHubReleaseAssets';
import MyDocCardList from '@site/src/components/MyDocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Get started

## Download p8g

<GitHubReleaseAssets owner="bernhardfritz" repo="p8g"/>

## Choose a programming language

<MyDocCardList items={useCurrentSidebarCategory().items}/>
