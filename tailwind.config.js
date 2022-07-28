/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["index.html", "./clientonly/**/*.{html,js}", "./config/**/*.{html,js}", "./js/**/*.{html,js}", "./modules/**/*.{html,js}", "./serveronly/**/*.{html,js}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				16: "repeat(16, minmax(0, 1fr))"
			},
			gridTemplateRows: {
				16: "repeat(16, minmax(0, 1fr))"
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
			},
			gridRowStart: {
				7: "7",
				8: "8",
				9: "9",
				10: "10",
				11: "11",
				12: "12",
				13: "13",
				14: "14",
				15: "15",
				16: "16"
			},
			gridRowEnd: {
				7: "7",
				8: "8",
				9: "9",
				10: "10",
				11: "11",
				12: "12",
				13: "13",
				14: "14",
				15: "15",
				16: "16"
			}
		}
	},
	plugins: []
};
