const homeRoute = `
<h1>Home</h1>
`;
const aboutRoute = `
<h1>About</h1>
`;
const productsRoute = `
<h1>Products</h1>
`;
const contactRoute = `
<h1>contact</h1>

`;

export function changePageContent(pageContentVarName) {
    $("#app").html(eval(pageContentVarName));
  }