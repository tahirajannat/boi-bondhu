// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state based on the provided JSON data
const initialState = {
	single_settings_enable: "true",
	single_button_position: "On image top left",
	single_button_type: "icon",
	single_button_text: "Add to wishlist",
	single_icon: "heart",
	single_theme_default: "true",
	single_icon_style: {
		icon_size: "20",
		icon_color: "#3056D3",
		icon_hover_color: "#000000",
	},
	single_button_color: {
		background_color: "",
		background_hover_color: "#458943",
		border_color: "#3056D3",
		border_hover_color: "",
	},
	single_button_size: {
		border_width: "1",
		border_height: "4",
		border_radius: "4",
		margin: "10",
	},
};

const productSingleSlice = createSlice({
	name: "productSingle",
	initialState,
	reducers: {
		updateProductSingle(state, action) {
			// Merge the action payload with the current state to update specific properties
			return {
				...state,
				...action.payload,
			};
		},
		getProductSingle(state, action) {
			// Merge the action payload with the current state to update specific properties
			return action.payload;
		},
	},
});
export const selectProductSingle = (state) => state.productSingle;

// Export the reducer and actions
export const { updateProductSingle, getProductSingle } =
	productSingleSlice.actions;
export default productSingleSlice.reducer;
