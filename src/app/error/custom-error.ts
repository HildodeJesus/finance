export class CustomApiError extends Error {
	public message: string;
	public statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

export function createCustomApiError(message: string, statusCode: number) {
	return new CustomApiError(message, statusCode);
}
