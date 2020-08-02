/**
 * MapEnv -> Class that provide the mapping of environment variables easy
 */
export class MapEnv {
  /**
   * Method to check is exists the environment variable
   * @param {string} key variable name
   */
  static keyExists(key: string): boolean {
    return !(
      process.env[key] === undefined ||
      (process.env[key] && process.env[key]!.toString().trim() === "")
    );
  }

  /**
   * Method to get the value from environment variable
   * @param {string} key variable name
   */
  static get<T>(key: string): T {
    if (!this.keyExists(key)) {
      throw new Error(`The environment variable '${key}' is not defined.`);
    }

    try {
      return JSON.parse(process.env[key]!.toString()) as T;
    } catch {
      throw new Error(
        `The environment variable '${key}' is not a json format.`
      );
    }
  }
}
