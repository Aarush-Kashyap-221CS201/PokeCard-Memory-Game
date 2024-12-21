import React, { useState, useEffect } from "react";

function CardDisplay({handleScoreChange}) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [selected,setSelected]=useState([]);
    const [unselected, setUnselected] = useState(() => Array.from({ length: 1025 }, (_, i) => i + 1));
    let check=false;    

    const fetchPokemonImages = async () => {
        if (check) return;
        check=true;
        setLoading(true); 
        setImages([]); 
        console.log("Fetching Pokémon images...");
        console.log(selected);

        const randomIndices = [];

        
        if (selected.length==0){
            while (randomIndices.length<9){
                const randomIndex = Math.floor(Math.random() * unselected.length) + 1;
                randomIndices.push(randomIndex);
            }
        }
        else{
            const temp = selected.slice(0).sort(() => Math.random() - 0.5).slice(0, Math.min(5, selected.length));
            let ind=0;
            for (let i=1;i<=9;i++){
                const choice=Math.random();
                if ((choice<0.5)||(ind>=temp.length)){
                    const randomIndex = Math.floor(Math.random() * unselected.length);
                    randomIndices.push(unselected[randomIndex]);
                }
                else randomIndices.push(temp[ind++]);
            }
        }

        const promises = randomIndices.map((index) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
                .then((response) => response.json())
                .then((data) => data.sprites.other["official-artwork"].front_default)
        );

        const fetchedImages = await Promise.all(promises);
        setImages(fetchedImages);
        setLoading(false); 
    };

    useEffect(() => {
        fetchPokemonImages(); 
    }, []); 

    function handleClick(image){
        if (!selected.includes(image)){
            setSelected(prevSelected => [...prevSelected, image]);
            setUnselected((prevUnselected) => prevUnselected.filter((item) => item !== image));
            handleScoreChange(true);
            fetchPokemonImages();
        }
        else{
            setSelected([]);
            setUnselected(() => Array.from({ length: 1025 }, (_, i) => i + 1));
            handleScoreChange(false);
            fetchPokemonImages();
        }
    }

    return (
        <div id="cards_box">
            <div id="cards">
                {loading ? (
                    <p>Loading Pokémon images...</p> 
                ) : (
                    images.map((image, index) => (
                        <div key={index} className="card" onClick={()=>handleClick(parseInt(image.split('/').pop().replace('.png', '')))}>
                            {image && <img src={image} alt={`Pokemon ${index + 1}`} />}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CardDisplay;
