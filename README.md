# Ugnay Components Web
- The web implementation of SurPath Hub's design system

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
npm install @surpath/ugnay
```
2. Import all the components that you want to use in your project.
```scss
@use '~@surpath/ugnay/Core/Theme';
@use '~@surpath/ugnay/Components/SPHButton';
@use '~@surpath/ugnay/Components/SPHTextField';
```
3. Define your color theme using the `$theme` variable.
```scss
$theme: (
    primary: (
        'light': #9c4dcc,
        'default': #6a1b9a,
        'dark': #38006b,
        'ink': #fff,
        'elevation': #000
    ),
    secondary: (
        'light': #ffba55,
        'default': #ffa300,
        'dark': #935f00,
        'ink': #000,
        'elevation': #000
    )
);
```
4. Inject your theme into the components' `use()` mixin using the `Theme.pick()` function.
```scss
@include SPHButton.use(Theme.pick(secondary, $theme));
@include SPHTextField.use(Theme.pick(primary, $theme));
```
5. DONE! Happy styling!

### TypeScript Usage
1. Import the typescript module of the component you want to use.
```typescript
import SPHNavbar from "@surpath/ugnay/Components/SPHNavbar";
```
2. Make a new instance of that component.
```typescript
import SPHNavbar from "@surpath/ugnay/Components/SPHNavbar";

const myNavbar = new SPHNavbar();
```
3. Attach `.use()` at the end of the instance variable.
```typescript
import SPHNavbar from "@surpath/ugnay/Components/SPHNavbar";

const myNavbar = new SPHNavbar();

myNavbar.use();
```
4. Let your compiler do its thing.
5. Done!
