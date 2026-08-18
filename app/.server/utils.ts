const SHEET_URL = process.env.SHEET_URL

export async function fetchSheet<T>(sheetName: string) {
    const response = await fetch(`${SHEET_URL}?sheet=${sheetName}`);
    return await response.json() as T[];
}