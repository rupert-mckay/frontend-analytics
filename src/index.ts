import * as amplitude from "@amplitude/analytics-browser";

export type InitializationSettings = {
	amplitudeApiKey?: string;
};

export type TrackOptions = {
	eventType: string;
	eventProperties?: Record<string, unknown>;
};

export const initializeAnalytics = ({
	amplitudeApiKey,
}: InitializationSettings) => {
	const isAmplitudeLoaded = !!amplitudeApiKey;

	if (isAmplitudeLoaded) amplitude.init(amplitudeApiKey);

	/**
	 * When we start supporting more frameworks the signature of this
	 * function will need to get more flexible.
	 *
	 * We recommend exposing a Partial intersection of all track
	 * parameter types. Then in the body of this function calling
	 * only the inner tracks which are satisfied by the supplied
	 * arguments.
	 */
	const track = (options: TrackOptions) => {
		if (isAmplitudeLoaded)
			amplitude.track(options.eventType, options.eventProperties);
	};

	return { track };
};
