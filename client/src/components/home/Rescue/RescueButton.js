import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RescueButton extends Component {
    #minute = 60000;
    #hour = this.#minute * 60;
    #day = this.#hour * 24;

    isAvailable() {
        const timeDiff = new Date() - new Date(this.props.dateRescued)
        return (timeDiff >= this.#day) && !(this.props.isNight); 
    }

    render() {
        return (          
            <Link 
                to={{ pathname: "/home/rescue" }}
                onClick={this.isAvailable() ? this.props.updateDateRescued : (e) => e.preventDefault()}
                class={this.isAvailable() 
                    ? "p-1 inline-flex flex items-center hover:text-gray-600 text-darkblue"
                    : "p-1 inline-flex flex items-center text-bluegray opacity-75 cursor-not-allowed"}>
                <svg 
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20pt" 
                    height="20pt" 
                    viewBox="10 0 144 144"
                >
                    <g 
                        transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
                    >
                        <path d="M811 1225 c-67 -66 -83 -87 -73 -97 21 -21 13 -27 -34 -25 -34 2 -48 -2 -55 -15 -6 -10 -19 -18 -29 -18 -10 0 -23 -7 -28 -16 -5 -9 -17 -14 -27 -13 -24 5 -21 23 5 27 11 2 20 10 20 18 0 8 9 14 21 14 12 0 31 10 44 22 l23 22 -55 50 c-30 28 -68 58 -84 67 -16 9 -35 22 -43 28 -10 9 -16 8 -26 -4 -7 -8 -21 -15 -31 -15 -10 0 -21 -5 -24 -10 -3 -6 -25 -19 -48 -31 -73 -36 -101 -52 -115 -66 -7 -7 -20 -13 -28 -13 -8 0 -14 -4 -14 -9 0 -4 -22 -19 -50 -32 -27 -13 -50 -28 -50 -34 0 -16 58 -73 134 -133 33 -26 94 -30 102 -7 4 8 15 15 25 15 10 0 19 -7 19 -15 0 -8 -7 -15 -15 -15 -17 0 -55 -35 -55 -50 0 -5 7 -10 15 -10 9 0 18 -7 21 -15 4 -8 17 -15 30 -15 15 0 24 -6 24 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 11 -10 25 -10 16 0 25 -6 25 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 18 -10 40 -10 29 0 40 4 40 15 0 9 9 15 25 15 14 0 25 5 25 10 0 6 11 15 25 20 14 5 25 14 25 20 0 5 11 10 25 10 16 0 25 6 25 15 0 9 9 15 25 15 14 0 25 5 25 10 0 6 11 15 25 20 14 5 25 14 25 20 0 5 9 10 20 10 10 0 23 6 27 13 4 8 17 17 27 21 18 6 18 8 -4 31 -13 14 -29 25 -36 25 -6 0 -14 7 -18 15 -3 8 -17 15 -31 15 -16 0 -25 6 -25 15 0 8 -9 15 -20 15 -11 0 -23 7 -26 15 -4 8 -14 15 -24 15 -10 0 -20 7 -24 15 -3 8 -17 15 -31 15 -16 0 -25 6 -25 15 0 8 -9 15 -20 15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 11 -10 25 -10 16 0 25 -6 25 -15 0 -9 9 -15 25 -15 14 0 25 -5 25 -10 0 -6 11 -15 25 -20 14 -5 25 -14 25 -20 0 -5 18 -10 40 -10 41 0 57 11 159 107 35 34 36 58 4 70 -10 3 -34 19 -54 35 -20 15 -44 28 -53 28 -9 0 -16 3 -16 8 0 4 -23 21 -51 37 -28 17 -63 38 -78 48 -14 9 -34 20 -43 23 -10 4 -18 10 -18 14 0 4 -10 10 -22 13 -18 5 -39 -10 -107 -78z m-271 -200 c0 -8 -9 -15 -19 -15 -10 0 -21 -7 -25 -15 -3 -8 -14 -15 -25 -15 -11 0 -24 -7 -29 -16 -5 -9 -17 -14 -26 -13 -24 5 -21 23 4 27 11 2 20 10 20 18 0 8 10 14 25 14 14 0 28 7 31 15 4 8 15 15 25 15 10 0 19 -7 19 -15z"/>
                        <path d="M205 785 c-44 -41 -83 -75 -87 -75 -21 0 -4 -29 27 -46 19 -10 35 -22 35 -26 0 -5 7 -8 15 -8 8 0 23 -9 32 -20 10 -11 23 -20 30 -20 7 0 13 -4 13 -10 0 -5 11 -12 25 -16 14 -3 25 -12 25 -20 0 -8 10 -14 25 -14 14 0 28 -7 31 -15 4 -8 15 -15 25 -15 10 0 19 -7 19 -15 0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 9 -9 15 -25 15 -13 0 -28 7 -33 16 -5 9 -18 14 -28 12 -15 -2 -20 -13 -22 -52 -2 -27 2 -54 7 -59 6 -6 11 -18 11 -27 0 -16 49 -70 64 -70 4 0 22 -11 39 -24 18 -13 42 -27 54 -30 11 -4 24 -13 27 -21 3 -8 12 -15 20 -15 18 0 76 -32 76 -42 0 -5 8 -8 17 -8 9 0 27 -10 39 -21 13 -12 30 -19 38 -16 14 6 16 35 16 205 0 109 -3 201 -6 205 -3 3 -40 -28 -81 -69 -51 -50 -84 -74 -99 -74 -15 0 -24 6 -24 15 0 8 -9 15 -20 15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15 0 -27 24 -16 80 36 30 28 72 65 92 82 30 25 35 34 27 49 -6 11 -21 23 -35 28 -13 5 -24 14 -24 20 0 5 -11 10 -24 10 -13 0 -26 7 -30 15 -3 8 -15 15 -26 15 -11 0 -20 5 -20 10 0 6 -11 15 -25 20 -14 5 -25 14 -25 20 0 5 -11 10 -24 10 -13 0 -26 7 -30 15 -3 8 -14 15 -25 15 -10 0 -21 7 -25 15 -3 8 -12 15 -19 15 -8 0 -20 7 -27 15 -7 8 -15 15 -19 15 -3 0 -42 -34 -86 -75z"/>
                        <path d="M1094 845 c-4 -8 -15 -15 -25 -15 -11 0 -22 -7 -25 -15 -4 -8 -17 -15 -30 -15 -13 0 -24 -5 -24 -10 0 -6 -11 -15 -25 -20 -14 -5 -25 -14 -25 -20 0 -5 -11 -10 -25 -10 -16 0 -25 -6 -25 -15 0 -9 -9 -15 -24 -15 -13 0 -26 -7 -30 -15 -3 -8 -15 -15 -26 -15 -11 0 -20 -7 -20 -15 0 -9 -9 -15 -23 -15 -12 0 -28 -10 -36 -22 -13 -21 -10 -25 45 -73 32 -27 74 -65 92 -82 38 -37 47 -40 56 -18 3 8 14 15 25 15 10 0 21 7 25 15 3 8 15 15 26 15 11 0 20 7 20 15 0 9 9 15 25 15 16 0 25 6 25 15 0 8 8 15 18 15 10 0 32 14 50 30 18 17 39 30 46 30 7 0 21 9 31 20 10 11 23 20 30 20 7 0 19 8 29 19 16 17 14 20 -31 57 -26 21 -66 58 -89 82 -44 46 -52 49 -60 27z"/>
                        <path d="M714 550 c-5 -5 -8 -96 -6 -209 l3 -201 24 0 c14 0 29 8 35 20 6 11 19 20 30 20 10 0 21 4 25 9 3 6 26 20 50 32 25 12 45 26 45 31 0 4 7 8 14 8 8 0 35 14 59 30 25 17 49 30 55 30 10 0 35 34 59 78 13 25 23 100 16 119 -7 19 -53 16 -53 -2 0 -9 -9 -15 -25 -15 -14 0 -25 -5 -25 -10 0 -6 -11 -15 -25 -20 -14 -5 -25 -14 -25 -20 0 -5 -9 -10 -20 -10 -11 0 -23 -7 -26 -15 -7 -18 -31 -19 -49 -2 -7 6 -30 26 -50 42 -21 17 -52 45 -70 62 -19 20 -35 29 -41 23z m141 -230 c10 -16 -28 -59 -52 -60 -31 0 -38 17 -19 45 17 25 59 34 71 15z"/>
                    </g>
                </svg>
                <span> Rescue </span>
            </Link>
        );   
    }
}
