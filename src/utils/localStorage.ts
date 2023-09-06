import AsyncStorage from "@react-native-async-storage/async-storage";

type StoredItemKey = "accessToken" | "userInfo";

export const storeLocalStorageItem = async ({
  storageKey,
  storageValue,
  callback,
}: {
  storageKey: StoredItemKey;
  storageValue: string;
  callback?: () => void;
}) => {
  try {
    await AsyncStorage.setItem(storageKey, storageValue, callback);
  } catch (error) {
    return error;
  }
};

export const retrieveLocalStorageItem = async (
  storageKey: StoredItemKey,
  callback?: () => void
) => {
  try {
    return AsyncStorage.getItem(storageKey, callback);
  } catch (error) {
    return error;
  }
};

export const removeLocalStorageItem = async (
  storageKey: StoredItemKey,
  callback?: () => void
) => {
  try {
    return AsyncStorage.removeItem(storageKey, callback);
  } catch (error) {
    return error;
  }
};
