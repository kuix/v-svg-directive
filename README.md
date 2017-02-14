# v-svg-directive

A simple Vue 2 directive to make referencing SVG symbol sprites easier.

## Install

Install `v-svg-directive` as an NPM package:

```bash
npm install v-svg-directive --save
```

## Setup

To use `v-svg-directive` in your project, use the [`Vue.use()`](https://vuejs.org/v2/api/#Vue-use) method to initialize it.

```js
import vSvg from 'v-svg';

Vue.use(vSvg, {
    path: '/images/icons.svg',
    prefix: 'icon-',
    class: 'icon'
});
```

### Options

`Vue.use()` accepts an `options` object as a second argument, and we are leveraging this to pass a few basic options to our directive:

##### `path` (required)

Path to your SVG sprite file. This is relative to the page the SVG icon appears on.

> **Example:**
>
> `{ path: '../images/my-svg-icons-bundle.svg' }`
>
> will become
>
> `<svg><use xlink:href="../images/my-svg-icons-bundle.svg#my-icon"></use></svg>`


##### `prefix` (optional)

A prefix to prepend before every icon name. In case all your SVG symbols are prefixed with the same prefix (most commonly `icon-`), use this option to set it, so you'd never have to type it again.

> **Example:**
>
> `{ prefix: 'myprefix-' }`
>
> will become
>
> `<svg><use xlink:href="../images/my-svg-icons-bundle.svg#myprefix-my-icon"></use></svg>`

##### `class` (optional)

A single classname to be added to all your SVG icons.

> **Example:**
>
> `{ class: 'svg-icon' }`
>
> will become
>
> `<svg class="svg-icon"><use xlink:href="../images/my-svg-icons-bundle.svg#myprefix-my-icon"></use></svg>`

## Usage

To include an SVG icon in your document, use the directive like this:

```html
<svg v-svg="'my-icon'"></svg>
```

**Note the single quotes inside double quotes! Starting from Vue.js 2.0 directives accept expressions, not literal strings.**

This means that if your icon is named `my-icon`, you will need to use single quotes inside double quotes to pass it along as a string (`v-svg="'my-icon'"`), otherwise Vue.js will look for a Vue property called `my-icon`. (Which is a perfectly fine usecase too, btw. 😉)

## Credit

This directive is highly inspired by [Phunky's `vue-svg-directive`](https://github.com/Phunky/vue-svg-directive). We started using it in our projects, but ran into a few issues with it. Then Vue 2 came along, and we decided to "lazy-fork" it, and create a version that could be used in almost all of our projects.
