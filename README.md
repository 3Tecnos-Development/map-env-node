<h3 align="center">map-env-node</h3>
<p align="center">The library maps the environment variables to the typescript object.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/map-env-node">
    <img src="https://img.shields.io/npm/v/map-env-node.svg" alt="NPM">
  </a>
  <!--a href="https://coveralls.io/github/3Tecnos-Development/map-env-node?branch=master">
    <img src="https://coveralls.io/repos/github/3Tecnos-Development/map-env-node/badge.svg?branch=master">
  </a-->  
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT">
  </a>
</p>

## Installation

Install via NPM:

```bash
npm install map_env_node

```

## Usage

.env (file)

```
API_CREDENTIAL={"projectId":1, "privateKey":"R1FT2S8D6S11H2SAA4HD"}
```

#### TypeScript

```typescript
import { MapEnv } from "map-env-node";

interface Credential {
  projectId: string;
  privateKey: string;
}

let credential = MapEnv.get<Credential>("API_CREDENTIAL");
console.log(credential.projectId);

Result: 1;
```

### Functionality

| Function  | Description                                        | Param                        | Return  |
| --------- | -------------------------------------------------- | ---------------------------- | ------- |
| keyExists | Method to check is exists the environment variable | {string} key - variable name | boolean |
| get< T >  | Method to get the value from environment variable  | {string} key - variable name | T       |
