function keyExists(key: string): boolean {
  return !(
    process.env[key] === undefined ||
    (process.env[key] && process.env[key]!.toString().trim() === "")
  );
}

export class MapEnv {
  static get<T>(key: string): T {
    if (!keyExists(key)) {
      throw new Error(`The environment variable '${key}' is not defined.`);
    }
    return JSON.parse(process.env[key]!.toString()) as T;
  }
}
