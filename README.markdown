# Traceur

## About
Traceur provides support for Googles Traceur project which adds many enhanced
features to the JavaScript language. For full details on what all Traceur does,
visit <http://code.google.com/p/traceur-compiler/wiki/LanguageFeatures>

## NOTICE
Version 2.0 of this package has transitioned effort to be a compiler and not a
runtime loader. It still works just the same as a runtime loader, just really,
DONT DO IT!

## Install
Traceur should only be installed globally to your developer system and never be
included as part of your package. The Traceur syntax transformer is way too slow
to use in a live system and should only be used as a compiler/tester.

  - Install with NPM:
     - `npm install traceur -g`

## Usage
Visit Traceur website as linked above for language features.

Traceur module provides 2 binaries:

`traceur app.js`:
This binary will execute node but all require() statements can make use of
traceur syntax. Note that startup will be slow as the source code is transformed!

This is the same thing as calling require('traceur') then requiring your file.

DO NOT USE THIS FEATURE IN A PRODUCTION APP!

`traceurc inputdir/ outputdir/`: this command takes a directory and finds every
.js file in the directory and compiles it with traceur then writes it in the same
dir format as input, to the output dir. A small runtime library is created at
outputdir/node_modules/traceur-runtime.js that is auto loaded by all modules.

You may need to add this to your package.json so npm wont ignore it...
(I hate that addition to npm :())

USE THIS FEATURE TO DEPLOY/PUBLISH!
## License
> The MIT License
>
>  Copyright (c) 2011 Daniel Ennis <aikar@aikar.co>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
