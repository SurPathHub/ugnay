## SPHNavbar Documentation
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
### SCSS/CSS
- Provided below is the code snippet, and the API of the component style.

```scss
@use '~@surpathhub/ugnay/SPHHeader';

@include SPHHeader.use();
```

### Typescript
```typescript
import { SPHNavBar } from "@surpathhub/ugnay/SPHNavbar";

const myNavbar: any = new SPHNavBar();
myNavbar.use();
```