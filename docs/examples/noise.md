---
description: C++ | JavaScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import noise_cpp from '!!raw-loader!@site/static/examples/src/noise/c++/noise.cpp';
import index_html from '!!raw-loader!@site/static/examples/src/noise/js/index.html';
import noise_js from '!!raw-loader!@site/static/examples/src/noise/js/noise.js';

# Noise

<Emscripten src="/examples/noise.html" />

<Tabs groupId="lang">
<TabItem value="cpp" label="C++">
<CodeBlock language="cpp" title="noise.cpp">{noise_cpp}</CodeBlock>
</TabItem>
<TabItem value="js" label="JavaScript">
<CodeBlock language="html" title="index.html">{index_html}</CodeBlock>
<CodeBlock language="js" title="noise.js">{noise_js}</CodeBlock>
</TabItem>
</Tabs>