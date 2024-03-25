import React from 'react';
import { plantList } from '../datas/plantList'; // Importer la constante plantList

function ShoppingList() {
    // Extraire les catégories uniques des plantes
    const uniqueCategories = [...new Set(plantList.map(plant => plant.category))];

    return (
        <div>
            <h2>Liste des catégories de plantes :</h2>
            <ul>
                {uniqueCategories.map((category, index) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <h2>Liste des plantes à vendre :</h2>
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${plant.name}-${index}`}>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
