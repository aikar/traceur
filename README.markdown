# Traceur

## About
Traceur provides support for Googles Traceur project which adds many enhanced
features to the JavaScript language. For full details on what all Traceur does,
visit <http://code.google.com/p/traceur-compiler/wiki/LanguageFeatures>


## Install
Traceur is ready to be installed from NPM, but may also be manually added
to your project with git submodules or a clone. First CD to your project root.
Ensure a directory named `node_modules` exists.

  - Install with NPM:
     - `npm install traceur`
     
  - Install with GIT:
     - As a submodule:
        - `git submodule add git://github.com/aikar/traceur node_modules/traceur`
        - `git submodule update --init --recursive`
     - As a plain clone:
        - `git clone git://github.com/aikar/traceur node_modules/traceur`

## Usage
To use Traceur, simply require it at the start of your node.js process.
You do not need to assign it to a variable or call any special function.
Simply require('traceur') and then all require() statements after it may use
Traceur syntax.
    
    require('traceur');
    
    // ./classes/MyClass.js has class MyClass { }
    MyClass = require('./classes/MyClass.js');
    
    var instance = new MyClass;
    
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
