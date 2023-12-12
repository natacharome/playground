// export class Page {
//   static buildPage(slug) {
//     const template = `
//         <!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Natacha's playground</title>
//             <script src="./dist/js/output.js" type="module" defer></script>
//             <link href="dist/output.css" rel="stylesheet">
//           </head>
//           <body id="page">
//             <h1 id="dynamicHeading"></h1>
//           </body>
//         </html>
//       `;
//     console.log(slug);
//     // const blob = new Blob([template], { type: "text/html" });
//     // const url = URL.createObjectURL(blob);
//     // console.log(url);
//     // document.location.href = url;

//     // // Clean up the URL object to free memory
//     // URL.revokeObjectURL(url);

//     // // Set dynamic content after navigation (you can call this from your main script)
//     // const newPage = document.getElementById("dynamicHeading");
//     // newPage.textContent = "Dynamic Content";
//   }
// }
