import * as amplitude from "@amplitude/analytics-browser";
import { vi } from "vitest";

import { initializeAnalytics } from "./index";

vi.mock("@amplitude/analytics-browser");

describe("initializeAnalytics", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("does not call Amplitude if no Amplitude API key was provided", () => {
		const mockAmplitudeTrack = vi.spyOn(amplitude, "track");

		// We pass no Amplitude API key here
		const analytics = initializeAnalytics({});

		// Track a dummy event
		analytics.track({ eventType: "Dummy event" });

		// But amplitude tracking was not called
		expect(mockAmplitudeTrack).not.toHaveBeenCalled();
	});

	it("calls Amplitude", () => {
		const mockEventType = "Dummy event";
		const mockAmplitudeApiKey = "Dummy API key";
		const mockAmplitudeInit = vi.spyOn(amplitude, "init");
		const mockAmplitudeTrack = vi.spyOn(amplitude, "track");

		// Initialize analytics with Amplitude API key
		const analytics = initializeAnalytics({
			amplitudeApiKey: mockAmplitudeApiKey,
		});

		// Confirm that Amplitude was initialized
		expect(mockAmplitudeInit).toHaveBeenCalledWith(mockAmplitudeApiKey);

		// Track a dummy event
		analytics.track({ eventType: mockEventType });

		// Confirm that Amplitude track was called
		expect(mockAmplitudeTrack).toHaveBeenCalledWith(mockEventType, undefined);
	});
});
