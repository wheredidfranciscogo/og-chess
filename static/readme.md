

# Hugo Template - Asset Organization

In this template, the **static** folder is used to store publicly accessible assets, such as fonts and images. Below is the structure and instructions on how to add and reference them:

## Fonts

1. Fonts should be placed in the `static/fonts/` directory.
2. You can add custom fonts by placing them in this directory and then referencing them in your `assets/css/custom.css` file.
3. For example, to include a font in the CSS file, you would use the `@font-face` rule and reference the fonts with relative paths like:
   ```css
   @font-face {
     font-family: "MyCustomFont";
     src: url("../fonts/MyCustomFont.woff2") format("woff2"),
          url("../fonts/MyCustomFont.woff") format("woff");
   }
   ```

## Images

1. Images should be placed in the `static/images/` directory.
2. You can reference these images in your CSS, HTML, or JavaScript files as needed.
3. For example, to reference an image in your CSS, use a relative path like:
   ```css
   background-image: url("../images/my-image.jpg");
   ```

This structure helps keep your assets organized and easily accessible for future development.