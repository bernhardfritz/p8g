---
description: C | JavaScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import keyboard_events_c from '!!raw-loader!@site/static/examples/src/keyboard-events/c/keyboard_events.c';
import index_html from '!!raw-loader!@site/static/examples/src/keyboard-events/js/index.html';
import keyboard_events_js from '!!raw-loader!@site/static/examples/src/keyboard-events/js/keyboard-events.js';

# Keyboard events

<Emscripten src="/examples/keyboard-events.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="keyboard_events.c">{keyboard_events_c}</CodeBlock>
</TabItem>
<TabItem value="js" label="JavaScript">
<CodeBlock language="html" title="index.html">{index_html}</CodeBlock>
<CodeBlock language="js" title="keyboard_events.js">{keyboard_events_js}</CodeBlock>
</TabItem>
</Tabs>