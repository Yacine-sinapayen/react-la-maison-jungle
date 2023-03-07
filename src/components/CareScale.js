import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType}) {
// Composant parent PLantItem
/* je récupère mes props 'scaleValue' et 'careType' depuis mon composant parents "PlantItems" 
Si je n'avais pas déclarer mes props directement dans les paramètres de ma fonctinon(ci-dessus) j'aurais pu les écrires ainsi grace à la destructuration: 
    const { scaleValue, careType } = props;
Avant ES6 cela s'écrivait : 
    const scaleValue = props.scaleValue et
    const careType = props.careType
---------- */

/* Créer une alerte qui se déclenche au clic sur le composant CareScale qui devra dire :

"Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage" en fonction de la donnée correspondante ;
1 - je défini un objet pair clès/valeur */
const quantityLabel = {
    1:'peu',
    2:'modérément',
    3:'beaucoup'
}

function plantNeeds(){
    alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)
}

/* S'il s'agit d'un composant CareScale de type "water" ou de type "light".*/

const range = [1, 2, 3]

const scaleType =
    careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

return (
    <div onClick={plantNeeds}>
        {range.map((rangeElem) =>
            scaleValue >= rangeElem ? (
                <span key={rangeElem.toString()}>{scaleType}</span>
            ) : null
        )}
    </div>
)
}

export default CareScale;
