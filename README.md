# fnValidator
### Validates Austrian FN-Numbers
* validates by calculating the check digit
* ignores "FN" and spaces

## Installation 
```sh
npm install @mbremi/fnvalidator --save
yarn add @mbremi/fnvalidator
bower install @mbremi/fnvalidator --save
```

## Usage
### Javascript
```javascript
var fnvalidator = require('@mbremi/fnvalidator');
var isValid = fnvalidator.isValidFnNumber('FN 12345 F');
```
```sh
Output should be true
```
### TypeScript
```typescript
import { isValidFnNumber } from '@mbremi/fnvalidator';
console.log(isValidFnNumber('12345F'))
```
```sh
Output should be true
```
### AMD
```javascript
define(function(require,exports,module){
  var fnvalidator = require('@mbremi/fnvalidator');
});
```
## Test 
```sh
npm run test
```
