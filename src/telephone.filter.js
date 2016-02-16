export function TelephoneFilter() {


    return filter;




    /**
     * Clean or format a telephone number
     *
     * @param {String} number
     * @param {String} method
     * @return {String} finalNumber
     */
    function filter(tel, method) {
        const maxLength = 10;
        const cityCodeLength = 3;
        const numberLength = 7;
        let longDistanceCode;

        // Return if no number was passed in
        if (!tel) {
            return '';
        }

        // Strip all non-numeric characters
        let value = tel.toString().trim().replace(/\D/g, '');

        // Trim to verify the model doesn't get any larger
        if (value.length > maxLength) {

            // If the first character is a US country code
            if (value.charAt(0) === '1') {
                // Save the code
                longDistanceCode = value.charAt(0);

                // Don't strip it, allow 11 digits
                value = value.substring(1, maxLength + 1);
            } else {
                value = value.substring(0, maxLength);
            }

        }

        // Return if no method was passed in
        if (!method) {
            return 'A method{string} is required. e.g. \'clean\' or \'format\'';
        }


        //
        // Clean a phone number
        if (method === 'clean') {
            return value;
        }


        //
        // Format a phone number
        if (method === 'format') {

            let city;
            let number;

            switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, cityCodeLength);
                number = value.slice(cityCodeLength);
            }

            if (number) {

                if (number.length > cityCodeLength) {

                    number = number.slice(0, cityCodeLength) + '-' +
                        number.slice(cityCodeLength, numberLength);

                } else {

                    number = number;

                }

                return (longDistanceCode ? longDistanceCode + ' ' : '') +
                    ('(' + city + ') ' + number).trim();

            } else {

                return '(' + city;

            }

        }

    }


}

