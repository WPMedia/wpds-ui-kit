const colors = {
	gray600: "#fefefe",
	gray500: "#f6f6f6",
	gray400: "#f0f0f0",
	gray300: "#e9e9e9",
	gray200: "#d5d5d5",
	gray100: "#aaaaaa",
	gray80: "#666666",
	gray60: "#333333",
	gray40: "#2a2a2a",
	gray20: "#111110",
	gray0: "#000000",
	blue300: "#DDE6F2",
	blue200: "#3D73D5",
	blue100: "1955A5",
	blue50: "#172A52",
	red300: "#F2DEDE",
	red200: "#F27B81",
	red100: "#EA0017",
	red50: "#D10000",
	green300: "#DFECD3",
	green200: "#AEDE7D",
	green100: "#61A125",
	green50: "#498A0C",
	orange300: "#FBEDD5",
	orange200: "#FFB743",
	orange100: "#F29F18",
	orange50: "#B16E00",
};

export const staticColors = Object.keys(colors)
	.map((color) => {
		return {
			[`static-${color}`]: colors[color],
		};
	})
	.reduce((previousValue, currentValue) => {
		return {
			...currentValue,
			...previousValue,
		};
	}, {});
