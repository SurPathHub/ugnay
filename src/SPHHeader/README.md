# SPHHeader Documentation

![img.png](img.png)

## HTML

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
## SCSS/CSS

### CSS Classes & HTML Attributes API

| Class | Effect |
|-------|--------|
| `.sph-header` | The main header component. |
| `.sph-header__wrap` | The wrapper for all the sub elements in the header. |
| `.sph-header__mast` | The divider and wrapper for all the branding related elements in the header. |
| `.sph-header__actions` | The divider and wrapper for all the action related elements in the header. |
| `.sph-header__logo` | The logo element in the header. |
| `.sph-header__text` | The website name in the header. |

### SCSS variables API (using `with ()`)

| Property | Effect |
|----------|--------|
| `$header-fill` | Changes the component's default state background color. |
| `$header-ink` | Changes the component's default state text color. |
| `$header-size` | Changes the component's text size. |
| `$header-radius` | Changes the component's border radius. |
| `$header-elevation-color` | Changes the component's elevation/shadow color.  |
| `$button-logo-width` | Changes the component's logo width. |
| `$button-logo-height` | Changes the component's logo height. |

```scss
@use '~@surpathhub/ugnay/SPHHeader' with (
    $header-fill: black
);

@include SPHHeader.use();
```

### CSS custom properties API

| Property | Effect |
|----------|--------|
| `--sph-header-fill` | Changes the component's default state background color. |
| `--sph-header-ink` | Changes the component's default state text color. |
| `--sph-header-size` | Changes the component's text size. |
| `--sph-header-radius` | Changes the component's border radius. |
| `--sph-button-logo-width` | Changes the component's logo width. |
| `--sph-button-logo-height` | Changes the component's logo height. |

```css
.sph-header {
    --sph-header-fill: blue;
    --sph-header-ink: #FFF;
    --sph-header-logo-height: 40px;
}
```
