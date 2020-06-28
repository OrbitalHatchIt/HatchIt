import React, { Component } from "react";

export default class Night extends Component {

    constructor(props) {
        super(props);
        this.state = {
            night: true 
        }
    }

    onNightClick = () => {
        this.setState({
            night: !this.state.night
        })
        this.props.nightCallBack(this.state.night);
    };

    render() {
        return (
            <div class={this.state.night ? "text-darkblue hover:text-gray-500" : "text-lightbluebg hover:text-white"}>
                <button
                    class="p-1 inline-flex flex items-center"
                    onClick={this.onNightClick}
                >
                    <svg 
                        class="w-6 fill-current"
                        viewBox="0 0 96 96" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" 
                        id="Icons_Food" 
                        overflow="hidden"
                        >
                        <g>
                            <path d="M47 12.5C43.3 10.7 39.5 9.5 35.7 9 46.7 19.9 50 37 42.7 51.7 35.5 66.4 19.7 74 4.5 71.9 7.2 74.6 10.5 77 14.1 78.8 32.4 87.9 54.6 80.4 63.6 62.1 72.6 43.8 65.3 21.7 47 12.5Z"/>
                            <path d="M86.9 54.5C86.7 54.2 86.7 53.8 86.9 53.5L88.8 50.7C89 50.3 89 49.9 88.8 49.6 88.6 49.3 88.1 49.1 87.8 49.2L84.7 50C84.3 50.1 83.9 49.9 83.7 49.6L81.8 46.8C81.5 46.4 81.1 46.3 80.7 46.4 80.3 46.5 80 46.9 80 47.3L79.8 50.7C79.8 51.1 79.5 51.4 79.1 51.6L76 52.3C75.6 52.4 75.3 52.7 75.3 53.2 75.3 53.6 75.5 54 75.9 54.1L77.2 54.8 78.9 55.7C79 55.8 79.2 55.9 79.3 56.1 79.4 56.3 79.4 56.4 79.4 56.6L79.4 60C79.4 60.4 79.6 60.8 80 60.9 80.4 61 80.8 60.9 81.1 60.6L83.3 57.9C83.6 57.6 84 57.5 84.4 57.6L87.7 58.8C88.1 58.9 88.5 58.8 88.8 58.5 89.1 58.2 89.1 57.7 88.9 57.4L86.9 54.5Z" />
                            <path d="M77.4 29.6 80.1 24.7C80.4 24.1 81 23.8 81.7 23.9L87.2 24.8C87.9 24.9 88.5 24.6 88.8 24 89.1 23.4 89 22.6 88.6 22.2L84.8 18.1C84.4 17.7 84.3 17 84.5 16.4L86.6 11.3C86.8 10.7 86.7 10 86.3 9.6 85.9 9.2 85.1 9 84.6 9.3L79.9 11.6C79.3 11.9 78.6 11.7 78.2 11.3L74.4 7.5C73.9 7 73.1 6.9 72.5 7.1 71.9 7.4 71.6 8.1 71.6 8.7L72.3 14C72.4 14.7 72.1 15.3 71.5 15.6L66.8 17.9C66.2 18.2 65.9 18.8 66 19.5 66.1 20.1 66.6 20.7 67.2 20.8L69.5 21.5 72.5 22.4C72.8 22.5 73 22.7 73.3 22.9 73.5 23.1 73.6 23.4 73.7 23.7L74.6 29.2C74.7 29.9 75.2 30.4 75.9 30.5 76.6 30.6 77.1 30.2 77.4 29.6Z" />
                        </g>
                    </svg>
                    <span>{this.state.night ? "Night" : "Day"} </span>
                </button>
            </div>
        );
    }
}
