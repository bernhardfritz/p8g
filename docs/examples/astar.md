---
description: C++
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import astar_cpp from '!!raw-loader!@site/static/examples/src/astar/c++/astar.cpp';
import astar_hpp from '!!raw-loader!@site/static/examples/src/astar/c++/astar.hpp';
import sketch_cpp from '!!raw-loader!@site/static/examples/src/astar/c++/sketch.cpp';

# A* search algorithm

<Emscripten src="/examples/astar.html" />

<Tabs groupId="lang">
<TabItem value="cpp" label="C++">
<CodeBlock language="cpp" title="astar.cpp">{astar_cpp}</CodeBlock>
<CodeBlock language="cpp" title="astar.hpp">{astar_hpp}</CodeBlock>
<CodeBlock language="cpp" title="sketch.cpp">{sketch_cpp}</CodeBlock>
</TabItem>
</Tabs>