function CardDisplay(props) {
    function convertToRoman(num) {
        if (num == 0) {
            return '0';
        }
        const romanValues = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        let roman = '';

        for (let key in romanValues) {
            while (num >= romanValues[key]) {
                roman += key;
                num -= romanValues[key]
            }
        }

        return roman
    }
    return(
        <div class="card">
            <h3>{convertToRoman(props.id)}. {props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default CardDisplay;