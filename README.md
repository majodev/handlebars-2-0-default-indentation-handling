# handlebars-2-0-indentation-problem

Current Handlebars versions [>v2.0.0-alpha.4](https://github.com/wycats/handlebars.js/releases/tag/v2.0.0-alpha.4) automatically add indentation to contained partials within templates (previous versions unaffected). This might cause unexpected output when upgrading. This package contains some simple code to reproduce this problem:
* partial `examplePartial.hbs` with a `pre` and `code` block and no indentation at contained text
* template `exampleTemplate.hbs` which uses the above partial and wraps it between 2 `div`s
* following logic within `index.js`:
  - read both `.hbs`-files
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
Hello World
second line indentation problem
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
    Hello World
    second line indentation problem
      </code>
    </pre>  </div>
</div>
```