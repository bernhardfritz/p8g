import useBaseUrl from '@docusaurus/useBaseUrl';

# Reference

export const Panel = ({children}) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 32,
            marginBottom: 32,
        }}>
        {children}
    </div>
);

<div
    style={{
        display: 'flex',
        flexWrap: 'wrap',
    }}>
    <Panel>
        <h2>Shape</h2>
        <a href="/docs/reference/ellipse">ellipse</a>
        <a href="/docs/reference/ellipseMode">ellipseMode</a>
        <a href="/docs/reference/line">line</a>
        <a href="/docs/reference/noSmooth">noSmooth</a>
        <a href="/docs/reference/point">point</a>
        <a href="/docs/reference/rect">rect</a>
        <a href="/docs/reference/rectMode">rectMode</a>
        <a href="/docs/reference/smooth">smooth</a>
        <a href="/docs/reference/strokeWeight">strokeWeight</a>
        <a href="/docs/reference/triangle">triangle</a>
    </Panel>
    <Panel>
        <h2>Color</h2>
        <a href="/docs/reference/background">background</a>
        <a href="/docs/reference/colorMode">colorMode</a>
        <a href="/docs/reference/fill">fill</a>
        <a href="/docs/reference/noFill">noFill</a>
        <a href="/docs/reference/noStroke">noStroke</a>
        <a href="/docs/reference/stroke">stroke</a>
    </Panel>
    <Panel>
        <h2>Transform</h2>
        <a href="/docs/reference/applyMatrix">applyMatrix</a>
        <a href="/docs/reference/resetMatrix">resetMatrix</a>
        <a href="/docs/reference/rotate">rotate</a>
        <a href="/docs/reference/scale">scale</a>
        <a href="/docs/reference/translate">translate</a>
    </Panel>
    <Panel>
        <h2>Events</h2>
        <a href="/docs/reference/keyCode">keyCode</a>
        <a href="/docs/reference/keyIsPressed">keyIsPressed</a>
        <a href="/docs/reference/keyPressed">keyPressed</a>
        <a href="/docs/reference/keyReleased">keyReleased</a>
        <a href="/docs/reference/mouseButton">mouseButton</a>
        <a href="/docs/reference/mouseIsPressed">mouseIsPressed</a>
        <a href="/docs/reference/mouseMoved">mouseMoved</a>
        <a href="/docs/reference/mousePressed">mousePressed</a>
        <a href="/docs/reference/mouseReleased">mouseReleased</a>
        <a href="/docs/reference/mouseWheel">mouseWheel</a>
    </Panel>
    <Panel>
        <h2>Image</h2>
        <a href="/docs/reference/image">image</a>
        <a href="/docs/reference/imageMode">imageMode</a>
        <a href="/docs/reference/image_">Image</a>
        <a href="/docs/reference/loadImage">loadImage</a>
        <a href="/docs/reference/noTint">noTint</a>
        <a href="/docs/reference/tint">tint</a>
    </Panel>
    <Panel>
        <h2>Typography</h2>
        <a href="/docs/reference/font">Font</a>
        <a href="/docs/reference/loadFont">loadFont</a>
        <a href="/docs/reference/text">text</a>
        <a href="/docs/reference/textFont">textFont</a>
        <a href="/docs/reference/textSize">textSize</a>
    </Panel>
    <Panel>
        <h2>Time</h2>
        <a href="/docs/reference/deltaTime">deltaTime</a>
        <a href="/docs/reference/millis">millis</a>
    </Panel>
    <Panel>
        <h2>State</h2>
        <a href="/docs/reference/pop">pop</a>
        <a href="/docs/reference/push">push</a>
    </Panel>
    <Panel>
        <h2>Random</h2>
        <a href="/docs/reference/random">random</a>
        <a href="/docs/reference/randomSeed">randomSeed</a>
    </Panel>
    <Panel>
        <h2>Miscellaneous</h2>
        <div style={{display: 'flex', gap: 4}}>
            <a href="/docs/reference/createCanvas">createCanvas</a>
            <img src={useBaseUrl('/img/js.svg')} title="JavaScript only" width="16" />
        </div>
    </Panel>
</div>
