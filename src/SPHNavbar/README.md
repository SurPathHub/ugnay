## SPHCard Documentation
### HTML

```html

<header class="sph-header">
    <div class="sph-header__wrap">
        <a href="">
            <div class="sph-header__mast">
                <img class="sph-header__logo" src="img/logo.png" alt="SPH Logo">
                <h1 class="sph-header__text">SurPath Hub</h1>
            </div>
        </a>
        <div class="sph-header__actions">
            <!-- YOU CAN PUT ANYTHING HERE, THE NAVBAR COMPONENT, TRIGGERS, CUSTOM ELEMENTS, ETC -->
        </div>
    </div>
</header>
```
### SCSS
- Provided below is the code snippet, and the API of the component style.
#### The `use()` mixin API
- The parameters in the `use()` mixin API only accept css custom properties from the `theme` config.

| Parameter | Effect                                                 |
|-----------|--------------------------------------------------------|
| `$fill`   | Changes the overall background color of the component. |
| `$ink`    | Changes the overall text color of all the component    |
| `$radius` | Changes the overall border-radius of the component     |
```scss
@use '~@surpathhub/ugnay/components/SPHHeader';

@include SPHHeader.use(
    $fill: primary,
    $ink: on-primary,
    $radius: large-radius
);
```
### Typescript
```typescript
import { SPHNavBar } from "@surpathhub/ugnay/components/SPHNavbar";

const myNavbar: any = new SPHNavBar();
myNavbar.use();
```