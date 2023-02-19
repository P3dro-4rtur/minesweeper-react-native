import * as SecureStore from "expo-secure-store";

class LocalStorageFunctions {
  static async getItem<T>(key: string): Promise<T> {
    return await SecureStore.getItemAsync(key).then((json) => {
      return JSON.parse(json ?? "{}") as T;
    });
  }

  static async setItem<T>(key: string, object: T): Promise<void> {
    return await SecureStore.setItemAsync(key, JSON.stringify(object));
  }

  static async deleteItem(key: string): Promise<void> {
    if (!(await SecureStore.getItemAsync(key))) return;

    return await SecureStore.deleteItemAsync(key);
  }

  static async getAllItems<T>(key: string): Promise<T[]> {
    return await SecureStore.getItemAsync(key).then((json) => {
      return JSON.parse(json ?? "[]") as T[];
    });
  }
}

export const LocalFunctions = LocalStorageFunctions;
