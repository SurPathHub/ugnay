# Ugnay Components Web
- The web implementation of SurPath Hub's design system

## Component documentation lookup
[1. SPHAppbar](SPHAppbar)<br>
[2. SPHButton](../SPHButton)<br>
[3. SPHCard](SPHCard)<br>
[4. SPHHeader](SPHHeader)<br>
[5. SPHNavbar](SPHNavbar)<br>
[6. SPHSnackbar](SPHSnackbar)<br>
[7. SPHTextField](SPHTextField)<br>

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

**_NOTE: NOT YET RELEASED ON NPM!! You can only use it using this repository as of now!_**
1. Install the modules using npm:
```shell
npm install @surpathhub/ugnay
```
2. Import all the components that you want to use in your project.
```scss
@use '~@surpathhub/ugnay/Core/Theme';
@use '~@surpathhub/ugnay/Components/SPHButton';
@use '~@surpathhub/ugnay/Components/SPHTextField';
```
3. Define your color theme using the `$theme` variable.
```scss
@include Theme.config(
    $primary: #474747
    $secondary: #7ed957
);
```
4. Call the component styles using the `use()` mixin.
```scss
@include SPHComponent.use();
```
4A. You can also override the component's overall theme scope using the `use()` parameters like `$fill`, `$ink`, and `$radius`.
```scss
@include SPHComponent.use(
    $fill: secondary,
    $ink: on-primary,
    $radius: medium-radius
);
```
4B. You can also fine-tune it further by using the CSS custom properties.
```scss
@include SPHComponent.use($fill: secondary) {

    /// AVAILABLE PROPERTIES INCLUDE, BUT NOT LIMITED TO:
    // --sph-[component_name]-active-fill
    // --sph-[component_name]-active-border
    // --sph-[component_name]-disabled-fill
    // --sph-[component_name]-disabled-border
    
};
```
5. DONE! Happy styling!

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
