import isAppleDevice from "./index";

describe("is-apple-device", () => {
	const consoleMock = vi
		.spyOn(console, "warn")
		.mockImplementation(() => undefined);

	afterAll(() => {
		consoleMock.mockReset();
	});

	it("is apple device based on navigator.platform", () => {
		/** @ts-expect-error 2740 */
		const nav: Navigator = {
			platform: "macintel",
		};

		expect(isAppleDevice(nav)).toBe(true);
	});

	it("is not apple device based on navigator.platform", () => {
		/** @ts-expect-error 2740 */
		const nav: Navigator = {
			platform: "win32",
		};

		expect(isAppleDevice(nav)).toBe(false);
		expect(consoleMock).toHaveBeenCalledTimes(0);
	});

	it("is apple device based on navigator.userAgentData.platform", () => {
		const nav: Navigator = {
			/** @ts-expect-error 2561 */
			userAgentData: {
				platform: "iPhone",
			},
		};

		expect(isAppleDevice(nav)).toBe(true);
		expect(consoleMock).toHaveBeenCalledTimes(0);
	});

	it("is not apple device based on navigator.userAgentData.platform", () => {
		const nav: Navigator = {
			/** @ts-expect-error 2561 */
			userAgentData: {
				platform: "Windows",
			},
		};

		expect(isAppleDevice(nav)).toBe(false);
		expect(consoleMock).toHaveBeenCalledTimes(0);
	});

	it("cannot find the platform", () => {
		/** @ts-expect-error 2740 */
		const nav: Navigator = {
			//
		};

		expect(isAppleDevice(nav)).toBe(false);
		expect(consoleMock).toHaveBeenCalledOnce();
	});
});
