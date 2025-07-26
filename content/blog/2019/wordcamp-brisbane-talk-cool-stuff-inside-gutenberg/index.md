---
title: WordCamp Brisbane talk - Cool Stuff Inside Gutenberg
date: '2019-08-26T23:46:46'
slug: wordcamp-brisbane-talk-cool-stuff-inside-gutenberg
author: haszari
status: publish
comment_status: open
ping_status: closed
menu_order: 0
post_type: post
comment_count: 1
guid: http://cartoonbeats.com/?p=303
featuredImage: images/Screenshot-2023-06-03-at-10.57.46-AM.png
contains_html: true
---

I [spoke](https://2019.brisbane.wordcamp.org/session/custom-interactivity-with-gutenberg-components/) at [WordCamp Brisbane](https://2019.brisbane.wordcamp.org) last weekend – my first WordCamp! I chose Brisbane as it seems like the strongest community in my part of the world. It didn't disappoint - the 2019 event broke records as the biggest #WCBNE ever!

For my talk topic, I wanted to shine a light on all the work going into the [Gutenberg project](https://github.com/WordPress/gutenberg). This code base powers the [block editor](https://wordpress.org/gutenberg/) in WordPress, but there's so much potential here.

Inside Gutenberg there's a [rich library of components](https://github.com/WordPress/gutenberg/tree/master/packages/components) that you can use to build [the custom block your site needs](https://github.com/haszari/wcbne-audio-blocks), [dashboard interfaces](https://wordpress.org/plugins/woocommerce-admin/) in wp-admin, and more. You can even use these packages outside WordPress - the possibilities are endless!

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=rsVhKXWTaps","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">https://www.youtube.com/watch?v=rsVhKXWTaps

</figure>
<!-- /wp:embed -->

## Demo – Page Soundtrack

To demo this, I decided to invest some of my spare time in building something fun that I might use. The idea was to add a soundtrack to blog posts and pages.

When writing a post, you add loops to the page. When the user is reading (scrolling) through the page, it will automatically sync and crossfade between the loops, a bit like a DJ.

The two blocks – a loop block and a play button – use Gutenberg components to allow the author to configure things like loop settings, and the page tempo. Have a play with it!

- Check out the demos
- Dig into the code

### Explore more

- https://developer.wordpress.org/block-editor/
- https://github.com/WordPress/gutenberg/
- https://thegutenbergsite.com
- https://make.wordpress.org/design/2019/08/12/project-reviewing-wordpress-components/
- https://gziolo.pl/2019/07/15/growing-javascript-skills-with-wordpress/
- https://reactjs.org