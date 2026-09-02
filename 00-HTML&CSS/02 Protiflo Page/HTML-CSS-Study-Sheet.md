# HTML and CSS Study Sheet

This sheet explains the tags, attributes, selectors, and CSS properties used so far in your portfolio page.

## HTML Tags

| Tag | Use | Why We Use It | Best Practice |
| --- | --- | --- | --- |
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 page. | Helps the browser render the page correctly. | Always put it as the first line in an HTML file. |
| `<html>` | Wraps the whole HTML document. | It is the root element of the page. | Add `lang="en"` to describe the page language. |
| `<head>` | Holds page settings, title, and CSS links. | This information helps the browser understand the page. | Put metadata and stylesheet links here, not visible content. |
| `<meta>` | Adds information about the page. | Used for character encoding and responsive layout. | Always include `charset` and `viewport` meta tags. |
| `<title>` | Sets the browser tab title. | Helps users and search engines know the page name. | Use a clear title like `Marwan Asem Portfolio`. |
| `<link>` | Connects external files like CSS. | Lets the HTML file use styles from `style.css`. | Use `rel="stylesheet"` when linking a CSS file. |
| `<body>` | Holds all visible page content. | Everything the user sees goes inside it. | Keep only page content here. |
| `<header>` | Top section of the page. | Usually contains the logo and navigation. | Use it for repeated top page content. |
| `<main>` | Main content of the page. | Helps browsers and screen readers find the main area. | Use only one `<main>` per page. |
| `<section>` | Groups one part of the page. | Useful for hero, about, skills, projects, and contact areas. | Give sections meaningful classes like `hero-section`. |
| `<div>` | Generic container. | Used when no semantic tag fits. | Do not overuse it when a better tag exists, like `<nav>` or `<section>`. |
| `<nav>` | Holds navigation links. | Tells browsers and screen readers this is a menu. | Use it for important links like Home, About, Projects, Contact. |
| `<a>` | Creates a clickable link. | Used for navigation and page links. | Always add a useful `href`. |
| `<img>` | Shows an image. | Used for logo, avatar, and icons. | Always add a meaningful `alt` text. |
| `<h1>` | Main heading. | Shows the most important title in a section/page. | Use one main page heading when possible. |
| `<p>` | Paragraph text. | Used for normal readable text. | Keep paragraphs short and clear. |
| `<button>` | Creates a clickable button. | Used for actions like `View My Work`. | Use buttons for actions, links for navigation. |
| `<span>` | Small inline/generic element. | Useful for small decoration or text styling. | For decorative elements, use `aria-hidden="true"`. |
| `<footer>` | Bottom section of the page. | Usually contains copyright or extra links. | Put footer content at the end of the body. |
| `<!-- comment -->` | Adds notes in HTML. | Helps explain code without showing text on the page. | Keep comments useful and short. |

## HTML Attributes

| Attribute | Used With | Use | Best Practice |
| --- | --- | --- | --- |
| `lang="en"` | `<html>` | Sets the page language to English. | Helps accessibility and search engines. |
| `charset="UTF-8"` | `<meta>` | Supports normal text and symbols. | Always use UTF-8. |
| `name="viewport"` | `<meta>` | Targets mobile viewport settings. | Needed for responsive websites. |
| `content="width=device-width, initial-scale=1.0"` | `<meta>` | Makes layout match the device width. | Always include this for mobile-friendly pages. |
| `rel="stylesheet"` | `<link>` | Says the linked file is CSS. | Required when linking CSS. |
| `href` | `<a>`, `<link>` | Gives the link destination. | Use correct file paths or URLs. |
| `src` | `<img>` | Gives the image file path. | Do not leave it empty. |
| `alt` | `<img>` | Describes the image if it cannot load. | Make it useful, or use empty `alt=""` for purely decorative images. |
| `class` | Most tags | Gives an element a CSS name. | Use clear names like `hero-text` or `nav-links`. |
| `aria-hidden="true"` | Decorative elements | Hides decoration from screen readers. | Use it when the element has no meaning for users. |

## CSS Selectors

| Selector | Example | Use | Best Practice |
| --- | --- | --- | --- |
| `:root` | `:root { --green: #18a66a; }` | Stores global CSS variables. | Put colors and repeated values here. |
| Universal selector | `* { box-sizing: border-box; }` | Selects every element. | Use carefully for simple reset rules. |
| Tag selector | `body { ... }` | Styles all elements with that tag. | Good for global base styles. |
| Class selector | `.container { ... }` | Styles elements with that class. | Best for reusable styling. |
| Descendant selector | `header .container { ... }` | Styles `.container` only inside `header`. | Use it when you want a style only in one area. |
| Pseudo-class | `.nav-links a:hover { ... }` | Styles an element during a state like hover. | Use for interaction feedback. |
| Media query | `@media (max-width: 700px)` | Applies CSS only on small screens. | Use it to make the website responsive. |

## CSS Properties

| Property | Use | Why We Use It | Best Practice |
| --- | --- | --- | --- |
| `box-sizing` | Controls how width and padding are calculated. | `border-box` makes sizing easier. | Put `box-sizing: border-box;` on `*`. |
| `margin` | Space outside an element. | Separates elements from other elements. | Use `margin: 0 auto;` to center fixed-width containers. |
| `padding` | Space inside an element. | Gives content breathing room. | Use section padding like `80px 20px`. |
| `font-family` | Sets the font. | Controls text style. | Use fallback fonts like `Arial, sans-serif`. |
| `color` | Text color. | Makes text readable and branded. | Use variables like `var(--dark)`. |
| `background-color` | Background color. | Separates page areas visually. | Use light backgrounds for readability. |
| `max-width` | Maximum element width. | Keeps content from stretching too wide. | Use on containers and text columns. |
| `width` | Element width. | Controls image, line, or button size. | Use responsive values like `min(430px, 100%)`. |
| `height` | Element height. | Controls fixed thickness or image height. | Use `auto` for images to avoid distortion. |
| `min-height` | Minimum height. | Makes sections tall enough. | Useful for hero sections. |
| `display` | Changes layout behavior. | `flex` makes side-by-side layouts easy. | Use `display: flex;` for alignment. |
| `align-items` | Aligns flex items vertically. | Centers items on the cross axis. | Use with flex containers. |
| `justify-content` | Aligns flex items horizontally. | Creates center or space-between layouts. | Use `space-between` for logo/nav or text/image layouts. |
| `gap` | Space between flex/grid items. | Cleaner than adding margins to children. | Use `gap` for nav links and columns. |
| `flex-wrap` | Lets flex items move to a new line. | Prevents overflow on small screens. | Use for navigation links. |
| `flex-direction` | Changes flex direction. | Makes columns stack on mobile. | Use `column` inside media queries. |
| `flex` | Controls how much space an item takes. | Lets image/text columns grow nicely. | Use simple values like `flex: 1;`. |
| `font-size` | Text size. | Creates text hierarchy. | Use bigger size for hero title, smaller for paragraph. |
| `font-weight` | Text boldness. | Highlights important text. | Use `600` or `700` for headings/buttons. |
| `line-height` | Space between text lines. | Makes text easier to read. | Use `1.4` to `1.6` for paragraphs. |
| `text-align` | Text horizontal alignment. | Centers text in sections or mobile layouts. | Use `center` for simple section headings. |
| `text-decoration` | Link underline/style. | Removes default underline when needed. | Remove only if hover/focus styles are clear. |
| `border` | Element border. | Adds edges to buttons or boxes. | Use `border: 0;` only when another visual style exists. |
| `border-bottom` | Bottom border only. | Separates header from page content. | Use a light color like `var(--light-gray)`. |
| `border-radius` | Rounds corners. | Makes buttons and lines softer. | Use small values like `8px` for buttons. |
| `cursor` | Mouse pointer style. | Shows something is clickable. | Use `cursor: pointer;` on buttons or clickable controls. |
| `transition` | Smooths visual changes. | Makes hover effects feel better. | Keep transitions short, like `0.3s`. |

## CSS Values and Functions

| Value / Function | Example | Meaning |
| --- | --- | --- |
| `var()` | `color: var(--dark);` | Uses a CSS variable from `:root`. |
| `calc()` | `min-height: calc(100vh - 100px);` | Calculates a value using math. |
| `min()` | `width: min(430px, 100%);` | Uses the smaller value. Good for responsive images. |
| `100vh` | `min-height: 100vh;` | Means 100% of the viewport height. |
| `auto` | `height: auto;` | Lets the browser calculate the size. Useful for images. |
| `0 auto` | `margin: 0 auto;` | Top/bottom margin is 0, left/right margin centers the element. |

## Current Project Classes

| Class | Used For | What It Does |
| --- | --- | --- |
| `.container` | Shared wrapper | Centers content and limits width. |
| `.logo` | Logo link | Makes the logo clickable. |
| `.logo-img` | Logo image | Controls logo size. |
| `.nav-links` | Navigation menu | Places navigation links beside each other. |
| `.hero-section` | Hero area | Creates the landing-page first section. |
| `.hero-text` | Hero text column | Keeps heading, paragraph, and button together. |
| `.hero-btn` | Hero button | Styles the main call-to-action button. |
| `.hero-img` | Avatar wrapper | Centers the avatar image. |
| `.Avatar-img` | Avatar image | Controls the hero avatar size. |
| `.about-section` | About area | Adds spacing, white background, and centered text. |
| `.about-items` | About content wrapper | Groups the about icon, title, line, and paragraph. |
| `.small-line` | Decorative line | Draws a small line using CSS instead of an image. |

## Best Practice Notes

1. Use semantic tags when possible: `header`, `nav`, `main`, `section`, and `footer`.
2. Use `div` only when there is no better semantic tag.
3. Do not leave image `src` empty.
4. Always add `alt` text to images.
5. Use classes for styling, not repeated inline styles.
6. Use CSS variables for repeated colors.
7. Use `display: flex` when you need items beside each other.
8. Use media queries to make the page look good on mobile.
9. Add comments only when they explain why the code exists.
10. Keep class names clear and consistent. For example, `avatar-img` is usually better than `Avatar-img`.

