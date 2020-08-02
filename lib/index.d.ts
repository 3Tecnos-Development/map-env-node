/**
 * MapEnv -> Class that provide the mapping of environment variables easy
 */
export declare class MapEnv {
    /**
     * Method to check is exists the environment variable
     * @param {string} key variable name
     */
    static keyExists(key: string): boolean;
    /**
     * Method to get the value from environment variable
     * @param {string} key variable name
     */
    static get<T>(key: string): T;
}
