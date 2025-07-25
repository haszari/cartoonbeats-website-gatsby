// The Gatsby blog template has this file, presumably to pull in browser-general baseline stuff.
// E.g. normalize and shared css "libs", also had fonts.
// TODO refactor my global css (and other content/js?) into this file, if it's a good / current pattern,
// otherwise factor these imports out to my global/base css.
// This file seems "magic", i.e. is pulled in by framework somehow.

// normalize CSS across browsers
import "./src/normalize.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"
