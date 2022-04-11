export function truncateBetween(str) {
    if(str){
        const firstFour = str.substring(0, 4);
        const lastFour = str.substring(str.length - 4, str.length);
        return firstFour + "..." + lastFour;
    }
}