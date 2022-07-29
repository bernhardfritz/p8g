import MyDocCardList from '@site/src/components/MyDocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Examples

<MyDocCardList items={useCurrentSidebarCategory().items.map((item) => ({...item, type: 'image', icon: <img src={useBaseUrl(`/img${item.href.substring(item.href.lastIndexOf('/'))}.png`)}></img>}))}/>
