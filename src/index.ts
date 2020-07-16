function keyExists(key:string):boolean{
    return !(process.env[key] === undefined || (process.env[key] && process.env[key]!.toString().trim() === ''));
}

export class MapEnv{
    static get<T>(key:string):T {
        if(!keyExists(key)){
            throw new Error(`A variável de ambiente '${key}' não está definida.`);
        }
        return JSON.parse(process.env[key]!.toString()) as T;
    }
}