---
title: Sorting algorithms 📚
description: Learn about sorting algorithms and how to visualize them.
image: https://i.imgur.com/VFOTk7O.jpg
authors: bernhardfritz
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/IconExternalLink';

Nearly every standard library offers data structures that can be sorted without really thinking about it. Still, it might come in handy to know about commonly used sorting algorithms or even implement some of them yourself as an exercise. After all, most sorting algorithms make heavy use of array indexing and recursion, and for this reason alone, they are often used as a medium to learn about and apply these concepts.

Even though sorting algorithms can be categorized by just a handful of different **methods**, there are hundreds of variations out there. Some algorithms are more efficient than others. You can compare their efficiency by both **time complexity** and **memory consumption**. It is worth noting that some sorting algorithms may perform worse in certain situations while, on average, they perform better than others. Finally, a **stable** sorting algorithm is expected to preserve the order of elements considered to be equal.

As you can tell, choosing the right sorting algorithm may not always be so easy. For this reason, I have compiled the following list, including implementation details for future reference:

|                            Name                            |             Best <br /> Average <br /> Worst             |  Memory  | Stable |    Method    |                    Visualization                    |
| :--------------------------------------------------------: | :------------------------------------------------------: | :------: | :----: | :----------: | :-------------------------------------------------: |
|   [Quicksort](/editor/b054bea1826babe6ea1b42863eb059f9)    |        $n \log n$ <br /> $n \log n$ <br /> $n^2$         | $\log n$ |   No   | Partitioning |   <img src={useBaseUrl('/img/quicksort.gif')} />    |
|   [Merge sort](/editor/e197e89a91af2582a2af44be9d8bcb00)   |      $n \log n$ <br /> $n \log n$ <br /> $n \log n$      |   $n$    |  Yes   |   Merging    |   <img src={useBaseUrl('/img/merge-sort.gif')} />   |
|    [Heapsort](/editor/7b6c7c25a1b6a0e9a48c75f89f5ac70b)    |      $n \log n$ <br /> $n \log n$ <br /> $n \log n$      |    1     |   No   |  Selection   |    <img src={useBaseUrl('/img/heapsort.gif')} />    |
| [Insertion sort](/editor/c5b47346de4a5158aff4992b8ee4b008) |              $n$ <br /> $n^2$ <br /> $n^2$               |    1     |  Yes   |  Insertion   | <img src={useBaseUrl('/img/insertion-sort.gif')} /> |
| [Selection sort](/editor/f6aff336deaa8335bae359ac133869aa) |             $n^2$ <br /> $n^2$ <br /> $n^2$              |    1     |   No   |  Selection   | <img src={useBaseUrl('/img/selection-sort.gif')} /> |
|   [Shellsort](/editor/c165238765751acc81778b8615c47f19)    | $n \log n$ <br /> $n^{4 \over 3}$ <br /> $n^{3 \over 2}$ |    1     |   No   |  Insertion   |   <img src={useBaseUrl('/img/shellsort.gif')} />    |
|  [Bubble sort](/editor/86809449c8a2d551c3ac2aeb930589d7)   |              $n$ <br /> $n^2$ <br /> $n^2$               |    1     |  Yes   |  Exchanging  |  <img src={useBaseUrl('/img/bubble-sort.gif')} />   |

## Further reading

* [Sorting algorithm<IconExternalLink />](https://en.wikipedia.org/wiki/Sorting_algorithm) on Wikipedia, the free encyclopedia