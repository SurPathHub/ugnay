# Ugnay Components Web
- The web implementation of SurPath Hub's design system

## Component documentation lookup
[1. SPHAppbar](SPHAppbar/README.md)<br>
[2. SPHButton](SPHButton/README.md)<br>
[3. SPHCard](SPHCard/README.md)<br>
[4. SPHHeader](SPHHeader/README.md)<br>
[5. SPHNavbar](SPHNavbar/README.md)<br>
[6. SPHTextField](SPHTextField/README.md)<br>

## Prerequisites
- NPM
- Sass Preprocessor (or some build pack like Webpack or Gulp)
- Knowledge about basic HTML, CSS, JS, and SCSS

## Basic Usage
- Now, we need to know how to use the components in our project for the library to work (duh.)
- So here's the basic usage for the HTML portion of the library:

### HTML Usage

1. Go to this library's documentation page/s
2. Select the component that you want.
3. Copy its HTML code.
4. Paste it in your project's html page/s.
5. Enjoy!

- Now these HTML components are very dull in and of its own. We need to add styles.
- At the next section of this Basic Usage portion, we'll be showing you the basic usage of the library's SCSS modules.

### SCSS Usage

1. Install the modules using npm:
```shell
npm install @surpathhub/ugnay
```
1A. Alternatively, you can instantiate the component styles using the official CDN
```html
<link rel="stylesheet" href="https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/main.css">
```
2. Import all the components that you want to use in your project.
```scss
@use '~@surpathhub/ugnay/SPHCore/Theme';
@use '~@surpathhub/ugnay/SPHButton';
@use '~@surpathhub/ugnay/SPHTextField';
```
2A. Alternatively, if you write in CSS directly, you can use the `@import url()` at-rule.
```css
@import url('https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/[component_name]/main.css');

/*  
    Examples:
    @import url('https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/SPHAppbar/main.css');
    @import url('https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/SPHButton/main.css');
    @import url('https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/SPHHeader/main.css');
    @import url('https://unpkg.com/@surpathhub/ugnay@0.1.0-beta/SPHTextField/main.css');
*/
```
3. Call the component styles using the `use()` mixin.
```scss
...

@include SPHComponent.use();
```
4. DONE! Happy styling!

### TypeScript Usage
1. Import the typescript module of the component you want to use.
```typescript
import SPHNavbar from "@surpathhub/ugnay/Components/SPHNavbar";
```
2. Make a new instance of that component.
```typescript
import SPHNavbar from "@surpathhub/ugnay/Components/SPHNavbar";

const myNavbar = new SPHNavbar();
```
3. Attach `.use()` at the end of the instance variable.
```typescript
import SPHNavbar from "@surpathhub/ugnay/Components/SPHNavbar";

const myNavbar = new SPHNavbar();

myNavbar.use();
```
4. Let your compiler do its thing.
5. Done!
