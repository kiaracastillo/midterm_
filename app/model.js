const homeRoute = `
<h1>Home</h1>
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

`;

export function changePageContent(pageContentVarName) {
    $("#app").html(eval(pageContentVarName));
  }