# [infinite-scroll-gallery](https://o4sxi.sse.codesandbox.io)
`ReactJs` `React SSR` `SASS` `IntersectionObserver Api` `NextJs` `NodeJs`

Load more photo when photo list is scroll to the bottom.

![demo](https://github.com/june50232/infinite-scroll-gallery/blob/master/infinite-scroll-gallery.gif)

## Installation

```shell
$ git clone https://github.com/june50232/infinite-scroll-gallery.git
$ cd infinite-scroll-gallery
$ npm install && npm run dev (or using yarn instead)
```

## Design Principle

- **user experience:** Used `React SSR` to let initial render fluently run with preloaded photos. Also, use image lazyload with `css animation` and `React lazyload`.
- **developer experience is important too:** Used `ESlint` to enhance quality of javascript, developed css with speed by `SASS`. Also, organized functions in components by using `React custom hook`.
- **performance improvement to save data of users:** First of all, get smaller photo by calculate size we needed and then set image src. Secondly, By using `IntersectionObserver Api` to observe page scroll rather by using onscroll listening method. Moreover, using react core functions like `useCallback`.
