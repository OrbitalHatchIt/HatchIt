import React from "react";

export default function Shop({ shopFoodCallBack, isNight }) {

    function onShopClick() {
        shopFoodCallBack(true && !isNight);
    }
    
    function updateButton() {
        if (isNight) {
            return "p-1 inline-flex flex items-center text-bluegray opacity-75 cursor-not-allowed"; 
        } else {
            return "p-1 hover:text-gray-600 inline-flex flex items-center text-darkblue";
        }
    }

    return (
        <div>
            <button
                class={updateButton()}
                onClick={onShopClick}
            >
            <svg 
                class="w-6 fill-current"
                viewBox="0 0 96 96" 
                xmlns="http://www.w3.org/2000/svg" 
                xlink="http://www.w3.org/1999/xlink" 
                id="Icons_Store" 
                overflow="hidden">
                <path d="M76 44C76 46.2 74.2 48 72 48 69.8 48 68 46.2 68 44L68 40 66 20 74 20 76 40 76 44ZM60 44C60 46.2 58.2 48 56 48 53.8 48 52 46.2 52 44L52 40 51 20 59 20 60 40 60 44ZM44 40 44 44C44 46.2 42.2 48 40 48 37.8 48 36 46.2 36 44L36 40 37 20 45 20 44 40ZM40 72 24 72 24 56 40 56 40 72ZM20 44 20 40 22 20 30 20 28 40 28 44C28 46.2 26.2 48 24 48 21.8 48 20 46.2 20 44ZM80 14 16 14 12 40 12 44C12 46.2 13.8 48 16 48L16 82 50 82 50 56 72 56 72 82 80 82 80 48C82.2 48 84 46.2 84 44L84 40 80 14Z" />
            </svg>
                <span>Shop</span>
            </button>
        </div>
    );
}