---
description: C
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import aabb_c from '!!raw-loader!@site/static/examples/src/quadtree/c/aabb.c';
import aabb_h from '!!raw-loader!@site/static/examples/src/quadtree/c/aabb.h';
import quadtree_c from '!!raw-loader!@site/static/examples/src/quadtree/c/quadtree.c';
import quadtree_h from '!!raw-loader!@site/static/examples/src/quadtree/c/quadtree.h';
import sketch_c from '!!raw-loader!@site/static/examples/src/quadtree/c/sketch.c';
import xy_c from '!!raw-loader!@site/static/examples/src/quadtree/c/xy.c';
import xy_h from '!!raw-loader!@site/static/examples/src/quadtree/c/xy.h';

# Quadtree

<Emscripten src="/examples/quadtree.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="aabb.c">{aabb_c}</CodeBlock>
<CodeBlock language="c" title="aabb.h">{aabb_h}</CodeBlock>
<CodeBlock language="c" title="quadtree.c">{quadtree_c}</CodeBlock>
<CodeBlock language="c" title="quadtree.h">{quadtree_h}</CodeBlock>
<CodeBlock language="c" title="sketch.c">{sketch_c}</CodeBlock>
<CodeBlock language="c" title="xy.c">{xy_c}</CodeBlock>
<CodeBlock language="c" title="xy.h">{xy_h}</CodeBlock>
</TabItem>
</Tabs>