
import UniqueHash from "./HashCode";

export default function Render() {
    // Get Render's ID
    const ContainerDOM = document.getElementById('container');


    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
        ContainerDOM.id = UniqueHash();
   
    })

    // Render's the JS Component

} 