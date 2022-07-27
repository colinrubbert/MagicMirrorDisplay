/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./clientonly/**/*.{html,js}", "./config/**/*.{html,js}", "./js/**/*.{html,js}", "./modules/**/*.{html,js}", "./serveronly/**/*.{html,js}"],
	theme: {
		extend: {
			gridColumn: {
				"span-16": "span 16 / span 16"
			},
			gridColumnStart: {
				13: "13",
				14: "14",
				15: "15",
				16: "16"
			},
			gridColumnEnd: {
				13: "13",
				14: "14",
				15: "15",
				16: "16"
			}
		}
	},
	plugins: []
};
