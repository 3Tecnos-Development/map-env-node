import { MapEnv } from "../index";
/*
describe("MapEnv functions T <String>", () => {
  process.env.KEY = "VALUE";
  process.env.JSON_KEY = '{ "VALUE": "OK" }';
  process.env.JSON_KEY_INVALID = '{ "VALUE": "OK"';

  it("'get' function => KEY2 not exists", () => {
    var key = "KEY2";
    expect(() => MapEnv.get<string>(key)).toThrow(
      `The environment variable '${key}' is not defined.`
    );
  });

  it("'get' function => KEY is not a string value", () => {
    var key = "KEY";
    expect(MapEnv.get<string>(key)).not.toEqual("VALUE");
  });

  it("'get' function => JSON_KEY valid", () => {
    var key = "JSON_KEY";
    var obj = { VALUE: "OK" };
    expect(MapEnv.get<string>(key)).toEqual(obj);
  });

  it("'get' function => JSON_KEY invalid", () => {
    var key = "JSON_KEY_INVALID";
    expect(() => MapEnv.get<string>(key)).toThrow(
      `The environment variable '${key}' is not a json format.`
    );
  });

  it("'keyExists' function => KEY exists", () => {
    var key = "KEY";
    expect(MapEnv.keyExists(key)).toEqual(true);
  });

  it("'keyExists' function => KEY2 not exists", () => {
    var key = "KEY2";
    expect(MapEnv.keyExists(key)).toEqual(false);
  });
});

describe("MapEnv functions T <Object>", () => {
  class Obj {
    value: string;
  }

  process.env.KEY = '{ "value": "OK"}';

  it("'get' function => testing class obj", () => {
    var key = "KEY";
    const result = MapEnv.get<Obj>(key) as Obj;

    expect(result.value).toEqual("OK");
  });
});
*/
