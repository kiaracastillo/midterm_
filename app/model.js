const homeRoute = `
<div class="home">

<div class="hero">
<div class="callout">
<h1>Lorem</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in feugiat eros. Donec a dictum arcu. </p>
<button>Lorem</button>
</div>
</div>

<div class="info">
<h1>Lorem ipsum dolor sit amet</h1>
<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in feugiat eros. Donec a dictum arcu. Mauris tincidunt blandit justo rhoncus cursus. Pellentesque dapibus dictum pharetra. Mauris lacinia magna vitae nisl volutpat sagittis at sed felis. Etiam sed urna velit. In sagittis, massa eu iaculis ullamcorper, felis felis facilisis leo, ut finibus diam sem molestie felis. Maecenas a est augue. Fusce ultricies porta pharetra. Nam fringilla tortor eu laoreet dapibus.</p>

<p></p>Ut a orci pulvinar, eleifend nisi porta, ornare nisi. Nullam tristique libero quis justo commodo rhoncus. Integer ut dolor pellentesque, aliquet mi consectetur, pharetra sapien. Pellentesque bibendum lectus quis sem imperdiet, eget commodo urna feugiat. Nulla cursus nisl vitae tincidunt rutrum. Sed mollis a nisl non laoreet. Ut sit amet vulputate arcu. Praesent accumsan convallis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi rutrum est et massa mollis, sit amet hendrerit lectus volutpat. Duis vel lobortis dolor. Vivamus nibh purus, faucibus sit amet vulputate in, scelerisque et justo.</p>

<p>Praesent a orci rhoncus neque dapibus maximus id at ex. Vestibulum ultricies ullamcorper massa eget malesuada. Aliquam sit amet orci ex. Nunc sodales nibh eu convallis imperdiet. Pellentesque vitae dictum libero. Donec vestibulum lectus felis, vel ultricies lorem imperdiet vel. Suspendisse non pharetra nisi, vitae varius sem. Praesent at massa purus. Maecenas in molestie justo, dignissim vulputate est. Sed a facilisis felis. In lacinia gravida tortor, quis fermentum augue porta eget. Vivamus dapibus lacus vitae venenatis suscipit. Ut at mauris vel augue vulputate dignissim nec non sem. Vestibulum ullamcorper gravida sem vehicula accumsan. Fusce non vestibulum diam.</p>
<p></p>Ut a orci pulvinar, eleifend nisi porta, ornare nisi. Nullam tristique libero quis justo commodo rhoncus. Integer ut dolor pellentesque, aliquet mi consectetur, pharetra sapien. Pellentesque bibendum lectus quis sem imperdiet, eget commodo urna feugiat. Nulla cursus nisl vitae tincidunt rutrum. Sed mollis a nisl non laoreet. Ut sit amet vulputate arcu. Praesent accumsan convallis facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi rutrum est et massa mollis, sit amet hendrerit lectus volutpat. Duis vel lobortis dolor. Vivamus nibh purus, faucibus sit amet vulputate in, scelerisque et justo.</p>

<p>Praesent a orci rhoncus neque dapibus maximus id at ex. Vestibulum ultricies ullamcorper massa eget malesuada. Aliquam sit amet orci ex. Nunc sodales nibh eu convallis imperdiet. Pellentesque vitae dictum libero. Donec vestibulum lectus felis, vel ultricies lorem imperdiet vel. Suspendisse non pharetra nisi, vitae varius sem. Praesent at massa purus. Maecenas in molestie justo, dignissim vulputate est. Sed a facilisis felis. In lacinia gravida tortor, quis fermentum augue porta eget. Vivamus dapibus lacus vitae venenatis suscipit. Ut at mauris vel augue vulputate dignissim nec non sem. Vestibulum ullamcorper gravida sem vehicula accumsan. Fusce non vestibulum diam.</p>

</div>

</div>
`;
const aboutRoute = `
<div class = "about-section">
  <div class = "about-content">
    <h1>About</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum ipsum, vel dolorem error dolorum unde praesentium doloremque quibusdam sed harum eaque, perspiciatis aperiam fugiat illo voluptates nulla, eos sequi?</p>

    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum ipsum, vel dolorem error dolorum unde praesentium doloremque quibusdam sed harum eaque, perspiciatis aperiam fugiat illo voluptates nulla, eos sequi?</p>
    </div>
</div>


`;
const productsRoute = `
<h1>Products</h1>
`;
const contactRoute = `
<h1>Contact</h1>
<h1>Contact</h1>

`;

export function changePageContent(pageContentVarName) {
    $("#app").html(eval(pageContentVarName));
  }