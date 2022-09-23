---
description: C | Java | JavaScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import mouse_events_c from '!!raw-loader!@site/static/examples/src/mouse-events/c/mouse_events.c';
import mouse_events_java from '!!raw-loader!@site/static/examples/src/mouse-events/java/MouseEvents.java';
import index_html from '!!raw-loader!@site/static/examples/src/mouse-events/js/index.html';
import mouse_events_js from '!!raw-loader!@site/static/examples/src/mouse-events/js/mouse-events.js';

# Mouse events

<Emscripten src="/examples/mouse-events.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="mouse_events.c">{mouse_events_c}</CodeBlock>
</TabItem>
<TabItem value="java" label="Java">
<CodeBlock language="java" title="MouseEvents.java">{mouse_events_java}</CodeBlock>
</TabItem>
<TabItem value="js" label="JavaScript">
<CodeBlock language="html" title="index.html">{index_html}</CodeBlock>
<CodeBlock language="js" title="mouse-events.js">{mouse_events_js}</CodeBlock>
</TabItem>
</Tabs>