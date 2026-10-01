import { ui, defaultLang, type Lang } from "./ui";

type DotValue = string | { [key: string]: unknown } | unknown[];

function getByPath(obj: unknown, path: string): unknown {
	let current: unknown = obj;
	for (const part of path.split(".")) {
		if (typeof current !== "object" || current === null) return undefined;
		current = (current as Record<string, unknown>)[part];
	}
	return current;
}

export function useTranslations(lang: Lang) {
	const dict = (ui[lang] ?? ui[defaultLang]) as unknown;

	return function t(key: string): string {
		const value = getByPath(dict, key);
		if (typeof value === "string") return value;
		const fallback = getByPath(ui[defaultLang] as unknown, key);
		if (typeof fallback === "string") return fallback;
		return key;
	};
}

export type { Lang };
