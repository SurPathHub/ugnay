## SPHAppBar Documentation
- This component uses the [box-icons library](https://boxicons.com/).

![img.png](img.png)

### HTML
```html
<nav class="sc-appbar">
    <div class="sc-appbar__container">
        <div class="sc-appbar__item active">
            <a href="">
                <i class="sc-appbar__item__icon bx bxs-like" aria-hidden="true"></i>
                <span class="sc-appbar__item__label">Active Label</span>
            </a>
        </div>
    </div>
</nav>
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
#### CSS custom properties API
| Property                  | Effect                                           |
|---------------------------|--------------------------------------------------|
| `--sph-appbar-icon-ink`   | Changes the icon text color of the component.    |
| `--sph-appbar-label-ink`  | Changes the icon text color of the component.    |
| `--sph-appbar-hover-ink`  | Changes the hover state color of the component.  |
| `--sph-appbar-active-ink` | Changes the active state color of the component. |
```scss
@use '~@surpathhub/ugnay/components/SPHAppbar';

@include SPHAppbar.use(
    $fill: primary,
    $ink: on-primary,
    $radius: large-radius
) {
    --sph-appbar-icon-ink: #custom-color;
    --sph-appbar-label-ink: #custom-color;
    --sph-appbar-hover-ink: #custom-color;
    --sph-appbar-active-ink: #custom-color;
};
```