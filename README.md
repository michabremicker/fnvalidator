# fnValidator
### Validates Austrian FN-Numbers
* validates by calculating the check digit
* ignores "FN" and spaces

## Installation 
```sh
npm install fnvalidator --save
yarn add fnvalidator
bower install fnvalidator --save
```

## Usage
### Javascript
```javascript
var fnvalidator = require('fnvalidator');
var isValid = fnvalidator.isValidFnNumber('FN 12345 F');
```
```sh
Output should be true
```
### TypeScript
```typescript
import { isValidFnNumber } from 'fnvalidator';
console.log(isValidFnNumber('12345F'))
```
```sh
Output should be true
```
### AMD
```javascript
define(function(require,exports,module){
  var fnvalidator = require('fnvalidator');
});
```
## Test 
```sh
npm run test
```
