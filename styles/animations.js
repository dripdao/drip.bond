import { keyframes } from "styled-components";

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const pulse = keyframes`
    0% {
        transform: scale(0.9);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(0.9);
    }
`;

export const loaderPulse = keyframes`
    0% {
        transform: scale(0.9);
    }

    30% {
        transform: scale(1.1);
    }

    60% {
        transform: scale(0.9);
    }
    90% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(0);
    }
`;