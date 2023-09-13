class LocalStorageService {
	private storage: Storage | null;

	constructor() {
		if (typeof window !== "undefined" && window.localStorage) {
			// Check if the window object is available (to avoid server-side rendering issues)
			this.storage = window?.localStorage;
		} else {
			// Fallback to an in-memory storage when not in a browser environment
			this.storage = createInMemoryStorage();
		}
	}

	// Set an item in local storage
	setItem<T>(key: string, value: T): void {
		if (this.storage) {
			this.storage.setItem(key, JSON.stringify(value));
		}
	}

	// Get an item from local storage
	getItem<T>(key: string): T | null {
		if (this.storage) {
			const storedItem = this.storage.getItem(key);
			return storedItem ? JSON.parse(storedItem) : null;
		}
		return null;
	}

	// Remove an item from local storage
	removeItem(key: string): void {
		if (this.storage) {
			this.storage.removeItem(key);
		}
	}

	// Clear all data in local storage
	clear(): void {
		if (this.storage) {
			this.storage.clear();
		}
	}
}

export default LocalStorageService;

// Helper function to create an in-memory storage
function createInMemoryStorage(): Storage {
	const storage: { [key: string]: string } = {};

	return {
		length: 0, // Added missing 'length' property
		key(index: number): string | null {
			const keys = Object.keys(storage);
			return index >= 0 && index < keys.length ? keys[index] : null;
		},
		getItem(key: string) {
			return storage[key] || null;
		},
		setItem(key: string, value: string) {
			storage[key] = value;
		},
		removeItem(key: string) {
			delete storage[key];
		},
		clear() {
			Object.keys(storage).forEach((key) => delete storage[key]);
		},
	};
}

