// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state based on the provided JSON data
const initialState = {
	enable_wishlist_for: "login_user",
	default_wishlist_name: "New list",
	exclude_type: "product",
	exclude_products: [
		{
			id: 1,
			product_name: "New product",
		},
	],
	exclude_categories: [
		{
			id: 1,
			category_name: "New category",
		},
	],
	item_count: false,
	guest_user_wishlist_days: "",
	enable_for_variation: true,
	enable_for_myaccount: false,
	multi_wishlist_settings: false,
	cart_page_wishlist: true,
	popup_enable: true,
	popup_title: "Choose a List",
	popup_button_text: "Add to wishlist",
	popup_feature_image_enable: true,
	popup_icon_image:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vector-based_example.svg/2000px-Vector-based_example.svg.png",
	custom_button_style: false,
	popup_button_text_style: {
		text_size: "10px",
		color: "",
		text_hover_color: "",
	},
	popup_button_color: {
		background_color: "",
		background_hover_color: "#f00f00",
		border_color: "#456544",
		border_hover_color: "#349054",
	},
	popup_button_size: {
		border_width: "2px",
		border_height: "1px",
		border_radius: "10px",
		margin: "10px",
	},

	popup_notification_text: "Successfully Added to wishlist",
	popup_notification_icon:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vector-based_example.svg/2000px-Vector-based_example.svg.png",
	popup_notification_button_text: "View wishlist",
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		updateWishlistSetting(state, action) {
			// Merge the action payload with the current state to update specific properties
			return {
				...state,
				...action.payload,
			};
		},

		getWishlistSettings(state, action) {
			// Merge the action payload with the current state to update specific properties
			return action.payload;
		},
	},
});
export const selectWishlist = (state) => state.wishlist;

// Export the reducer and actions
export const { updateWishlistSetting, getWishlistSettings } =
	wishlistSlice.actions;
export default wishlistSlice.reducer;
