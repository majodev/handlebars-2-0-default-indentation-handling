# handlebars-2-0-indentation-problem

Current Handlebars versions [>v2.0.0-alpha.4](https://github.com/wycats/handlebars.js/releases/tag/v2.0.0-alpha.4) automatically add indentation to contained partials within templates (previous versions unaffected). [Release notes](https://github.com/wycats/handlebars.js/blob/master/release-notes.md#v200-beta1---august-26th-2014) mention the new behaviour: *Partials that are standalone will now indent their rendered content*, however provide **no workaround** to disable this functionality was provided. 

This feature might cause unexpected output when upgrading, especially when using additional precompilers that perform text transformations (e.g. markdown via [marked](https://github.com/chjj/marked)) and relied on that old behaviour. 

This package contains some simple code to reproduce this new feature:
* a partial `examplePartial.hbs` with a `pre` and `code` block and no indentation at contained text
* a template `exampleTemplate.hbs` which uses the above partial and wraps it between 2 `div`s
* following logic within `index.js`:
  - read both `.hbs` files
  - register the partial
  - compile the template and
  - output compiled string to `console.log` 

## How to reproduce this behaviour?
`git clone` this repository and `cd` into it   
`npm install --save handlebars@v2.0.0-alpha.4`   
`node index.js`   

*Output* (handlebars@v2.0.0-alpha.4)
```
<div>
  <div>
    <pre>
  <code>
Hello World, I don't want any indentation
second line
  </code>
</pre>
  </div>
</div>
```

`npm install --save handlebars@v2.0.0-beta.1` or `npm install --save handlebars@v2.0.0`

*Output* (handlebars@v2.0.0-beta.1 and handlebars@v2.0.0)
```
<div>
  <div>
    <pre>
      <code>
    Hello World, I don't want any indentation
    second line
      </code>
    </pre>  </div>
</div>
```

## License
Source code is licensed under The MIT License (MIT)
Copyright © 2014 Mario Ranftl (@majodev)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.